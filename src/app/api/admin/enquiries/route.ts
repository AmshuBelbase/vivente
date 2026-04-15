import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import type { RowDataPacket } from "mysql2";

// This describes the shape of one enquiry row coming back from MySQL.
// TypeScript uses this so it knows exactly what fields to expect.
interface EnquiryRow extends RowDataPacket {
  enq_id: number;
  full_name: string;
  country_code: string;
  phone_number: string;
  email_address: string;
  service_interested: string;
  project_type: string;
  project_location: string;
  project_timeline: string;
  message: string;
  enquiry_status: "pending" | "handled";
  enquiry_time: string;
}

// Custom sort order for project_timeline — so "Immediate" always comes first,
// not sorted alphabetically like a dictionary would.
const TIMELINE_ORDER = [
  "Immediate",
  "Within 1 Month",
  "Within 3 Months",
  "Within 6 Months",
  "Flexible",
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    // Read all the filter/sort/page options the dashboard sends us
    const search = searchParams.get("search") || "";
    const service = searchParams.get("service") || "";
    const projectType = searchParams.get("projectType") || "";
    const timeline = searchParams.get("timeline") || "";
    const status = searchParams.get("status") || "";
    const sortBy = searchParams.get("sortBy") || "created_at";
    const sortDir = searchParams.get("sortDir") === "asc" ? "ASC" : "DESC";
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = 10;
    const offset = (page - 1) * limit;

    // ── Build the WHERE clause dynamically ─────────────────────────────
    // Instead of one massive fixed SQL query, we build it piece by piece.
    // Each active filter adds a condition and its value to the params array.
    // The '?' placeholders keep user input out of the SQL string directly
    // (this is what prevents SQL injection).
    const conditions: string[] = [];
    const params: (string | number)[] = [];

    if (search) {
      // Fuzzy search: look for the search term across 5 columns at once
      conditions.push(
        "(full_name LIKE ? OR email_address LIKE ? OR phone_number LIKE ? OR project_location LIKE ? OR message LIKE ?)"
      );
      const like = `%${search}%`;
      params.push(like, like, like, like, like);
    }

    if (service) {
      conditions.push("service_interested = ?");
      params.push(service);
    }

    if (projectType) {
      conditions.push("project_type = ?");
      params.push(projectType);
    }

    if (timeline) {
      conditions.push("project_timeline = ?");
      params.push(timeline);
    }

    if (status) {
      conditions.push("enquiry_status = ?");
      params.push(status);
    }

    // Join all conditions with AND, or use nothing if no filters are active
    const where = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    // ── Build the ORDER BY clause ───────────────────────────────────────
    // FIELD() is a MySQL trick: it lets us define a custom sort order.
    // e.g. FIELD(project_timeline, 'Immediate', '1-3 months', ...) returns
    // 1 for Immediate, 2 for 1-3 months, etc. — so sorting by it gives
    // our custom order instead of alphabetical.
    let orderBy: string;
    if (sortBy === "project_timeline") {
      const fieldList = TIMELINE_ORDER.map(() => "?").join(", ");
      orderBy = `ORDER BY FIELD(project_timeline, ${fieldList}) ${sortDir}`;
      params.push(...TIMELINE_ORDER); // these go into the params for the data query
    } else if (sortBy === "full_name") {
      orderBy = `ORDER BY full_name ${sortDir}`;
    } else {
      orderBy = `ORDER BY enquiry_time ${sortDir}`;
    }

    // ── Run both queries at the same time (parallel) ────────────────────
    // Promise.all means: start both DB calls together, wait for both to finish.
    // This is faster than doing them one after another.
    //
    // Query 1: get the actual rows for this page
    // Query 2: count total matching rows (so the dashboard knows how many pages)
    //
    // For the count query we use separate params (no FIELD() params needed).
    // Rebuild count params cleanly — only the WHERE conditions, no ORDER BY values
    const whereParams: (string | number)[] = [];
    if (search) {
      const like = `%${search}%`;
      whereParams.push(like, like, like, like, like);
    }
    if (service) whereParams.push(service);
    if (projectType) whereParams.push(projectType);
    if (timeline) whereParams.push(timeline);
    if (status) whereParams.push(status);

    const [rows, countResult] = await Promise.all([
      pool.execute<EnquiryRow[]>(
        `SELECT * FROM enquiry ${where} ${orderBy} LIMIT ? OFFSET ?`,
        [...params, limit, offset]
      ),
      pool.execute<RowDataPacket[]>(
        `SELECT COUNT(*) as total FROM enquiry ${where}`,
        whereParams
      ),
    ]);

    const enquiries = rows[0];
    const total = (countResult[0][0] as { total: number }).total;
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      success: true,
      enquiries,
      total,
      page,
      totalPages,
    });
  } catch (error) {
    console.error("Admin enquiries GET error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch enquiries." },
      { status: 500 }
    );
  }
}

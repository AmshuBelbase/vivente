import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import type { ResultSetHeader } from "mysql2";

// PATCH — toggle an enquiry's status between "pending" and "handled"
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await req.json();

    if (status !== "pending" && status !== "handled") {
      return NextResponse.json(
        { success: false, error: "Invalid status value." },
        { status: 400 }
      );
    }

    const [result] = await pool.execute<ResultSetHeader>(
      "UPDATE enquiry SET enquiry_status = ? WHERE enq_id = ?",
      [status, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, error: "Enquiry not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin enquiry PATCH error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update status." },
      { status: 500 }
    );
  }
}

// DELETE — permanently remove an enquiry row
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const [result] = await pool.execute<ResultSetHeader>(
      "DELETE FROM enquiry WHERE enq_id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, error: "Enquiry not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin enquiry DELETE error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete enquiry." },
      { status: 500 }
    );
  }
}

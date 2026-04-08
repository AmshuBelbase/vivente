import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      countryCode,
      phoneNumber,
      emailAddress,
      serviceInterestedIn,
      projectType,
      projectLocation,
      projectTimeline,
      message,
    } = body;

    if (!fullName || !phoneNumber || !emailAddress || !message) {
      return NextResponse.json(
        { success: false, error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const [result] = await pool.execute(
      `INSERT INTO enquiry
      (full_name, country_code, phone_number, email_address, service_interested, project_type, project_location, project_timeline, message)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        fullName,
        countryCode,
        phoneNumber,
        emailAddress,
        serviceInterestedIn,
        projectType,
        projectLocation || "",
        projectTimeline,
        message,
      ]
    );

    return NextResponse.json({ success: true, data: result }, { status: 201 });
  } catch (error) {
    console.error("Enquiry DB error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
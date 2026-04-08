import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import transporter from "@/lib/mailer";
import type { ResultSetHeader } from "mysql2";

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

    const [result] = await pool.execute<ResultSetHeader>(
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

    let emailSent = false;

    try {
      await transporter.sendMail({
        from: `"Enquiry at Vivente" <${process.env.SMTP_USER}>`,
        to: process.env.ENQUIRY_TO,
        // bcc: process.env.SMTP_USER,
        replyTo: emailAddress,
        subject: `New Enquiry from ${fullName}`,
        text: `
A new enquiry has been submitted on the Vivente website.

Enquiry ID: ${result.insertId}
Full Name: ${fullName}
Country Code: ${countryCode}
Phone Number: ${phoneNumber}
Email Address: ${emailAddress}
Service Interested In: ${serviceInterestedIn}
Project Type: ${projectType}
Project Location: ${projectLocation || "N/A"}
Project Timeline: ${projectTimeline}
Message:
${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
            <h2>New Enquiry Received</h2>
            <p>A new enquiry has been submitted on the Vivente website.</p>
            <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%; max-width: 700px;">
              <tr><td><strong>Enquiry ID</strong></td><td>${result.insertId}</td></tr>
              <tr><td><strong>Full Name</strong></td><td>${fullName}</td></tr>
              <tr><td><strong>Country Code</strong></td><td>${countryCode}</td></tr>
              <tr><td><strong>Phone Number</strong></td><td>${phoneNumber}</td></tr>
              <tr><td><strong>Email Address</strong></td><td>${emailAddress}</td></tr>
              <tr><td><strong>Service Interested In</strong></td><td>${serviceInterestedIn}</td></tr>
              <tr><td><strong>Project Type</strong></td><td>${projectType}</td></tr>
              <tr><td><strong>Project Location</strong></td><td>${projectLocation || "N/A"}</td></tr>
              <tr><td><strong>Project Timeline</strong></td><td>${projectTimeline}</td></tr>
              <tr><td><strong>Message</strong></td><td>${message.replace(/\n/g, "<br/>")}</td></tr>
            </table>
          </div>
        `,
      });

      emailSent = true;
    } catch (mailError) {
      console.error("Mail send error:", mailError);
    }

    return NextResponse.json(
      {
        success: true,
        enquiryId: result.insertId,
        emailSent,
        message: emailSent
          ? "Enquiry submitted successfully."
          : "Enquiry saved successfully, but email notification failed.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry DB error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to save enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
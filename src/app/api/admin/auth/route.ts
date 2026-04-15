import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

// Signs a value using ADMIN_SECRET so the cookie can't be faked
function sign(value: string): string {
  const secret = process.env.ADMIN_SECRET!;
  const hmac = createHmac("sha256", secret).update(value).digest("hex");
  return `${value}.${hmac}`;
}

// POST — verify password, issue session cookie
export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Invalid password." },
        { status: 401 }
      );
    }

    // Build a signed session token: timestamp + signature
    const token = sign(`admin_${Date.now()}`);

    const res = NextResponse.json({ success: true });

    // Set the cookie — httpOnly means JS can't read it (more secure)
    res.cookies.set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return res;
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}

// DELETE — clear the session cookie (logout)
export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_session", "", { maxAge: 0, path: "/" });
  return res;
}

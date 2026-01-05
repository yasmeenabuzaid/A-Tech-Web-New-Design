
import { NextResponse } from "next/server";
import { sendMail } from "../../../lib/mailer";
export async function POST(request: Request) {
const body = await request.json();

  const { name, company, email, phone, interest, message } = body;

 //  Required fields check
  if (!name || !company || !email || !interest || !message) {
    return NextResponse.json(
      {
        success: false,
        message: "Missing required fields",
      },
      { status: 400 }
    );
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid email format",
      },
      { status: 400 }
    );
  }

    // Send Email
    await sendMail({
      to: process.env.ADMIN_EMAIL!,
      subject: `📩 New Contact Request - ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

  // 3️⃣ Everything is valid
  console.log("Validated data:", {
    name,
    company,
    email,
    phone,
    interest,
    message,
  });

  return NextResponse.json({
    success: true,
    message: "Validation passed ✅",
  });
}



import { NextResponse } from "next/server";
import { sendMail } from "../../../lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, interest, message } = body;

    if (!name || !company || !email || !interest || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    const interestLabel = interest === "custom" 
      ? "Custom Software Development" 
      : "POS/ERP Platform Demo";

    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #9306FF; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; margin-top: 0;">📩 New Contact Request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 30%; color: #555;"><strong>Name:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${name}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555;"><strong>Company:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${company}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #9306FF;">${email}</a></td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555;"><strong>Phone:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${phone || "Not provided"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555;"><strong>Interest:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${interestLabel}</td></tr>
        </table>
        <div style="margin-top: 25px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #9306FF; border-radius: 4px;">
          <h3 style="margin-top: 0; color: #333; font-size: 16px;">Message:</h3>
          <p style="white-space: pre-wrap; color: #444; line-height: 1.6; margin-bottom: 0;">${message}</p>
        </div>
      </div>
    `;

    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 25px;">
          <h2 style="color: #9306FF; margin: 0;">Thank You for Reaching Out!</h2>
        </div>
        <p style="font-size: 16px; color: #333;">Hi <strong>${name}</strong>,</p>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          We have successfully received your request regarding <strong>${interestLabel}</strong>. 
          Our team is reviewing your details and will get back to you within <span style="color: #9306FF; font-weight: bold;">24 hours</span>.
        </p>
        <div style="margin: 25px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px; color: #666; font-size: 14px;">
          <p style="margin: 0 0 10px 0;"><strong>A copy of your message:</strong></p>
          <p style="white-space: pre-wrap; margin: 0; font-style: italic; color: #555;">"${message}"</p>
        </div>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          Best regards,<br>
          <strong style="color: #111;">A-Tech Team</strong>
        </p>
      </div>
    `;

    await Promise.all([
      sendMail({
        to: process.env.ADMIN_EMAIL!,
        subject: ` New Contact Request - ${company}`,
        html: adminEmailHtml,
      }),
      sendMail({
        to: email, 
        subject: `We've received your request - A-Tech`,
        html: clientEmailHtml,
      }),
    ]);

    console.log("Emails sent successfully for:", email);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully ",
    });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
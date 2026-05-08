import { NextResponse } from "next/server";
import { sendMail } from "../../../lib/mailer"; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      firstName, lastName, email, phone, company, 
      projectType, budget, timeline, 
      description, coreFeatures, referenceLinks 
    } = body;

    // Basic validation on backend
    if (!firstName || !lastName || !email || !description || !coreFeatures) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const typeLabels: Record<string, string> = { web: "Web Application", mobile: "Mobile App", erp: "ERP / SaaS Solution", other: "Other" };
    const timelineLabels: Record<string, string> = { "asap": "ASAP (Urgent)", "1-3m": "1 to 3 Months", "3-6m": "3 to 6 Months", "flexible": "Flexible Timeline" };
    const fullName = `${firstName} ${lastName}`;

    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 16px; background: #ffffff;">
        <h2 style="color: #9306FF; text-align: center;">🚀 New Project Brief Received</h2>
        <h3 style="color: #111;">1. Client Profile</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <h3 style="color: #111;">2. Project Scope</h3>
        <p><strong>Type:</strong> ${typeLabels[projectType] || projectType}</p>
        <p><strong>Budget:</strong> $${budget}</p>
        <p><strong>Timeline:</strong> ${timelineLabels[timeline] || timeline}</p>
        <h3 style="color: #111;">3. Technical Requirements</h3>
        <p><strong>Overview:</strong><br/>${description}</p>
        <p><strong>Core Features:</strong><br/>${coreFeatures}</p>
        <p><strong>References:</strong><br/>${referenceLinks || "None"}</p>
      </div>
    `;

    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 16px;">
        <h2 style="color: #111; text-align: center;">Project Brief Received ✨</h2>
        <p>Hi <strong style="color: #9306FF;">${firstName}</strong>,</p>
        <p>Thank you for trusting us. We have successfully received your requirements for your <strong>${typeLabels[projectType] || projectType}</strong>.</p>
        <p>Our engineering team is analyzing your brief. We will reach out within <strong>1-2 business days</strong> with next steps.</p>
        <p>Best regards,<br><strong>A-Tech Engineering Team</strong></p>
      </div>
    `;

    await Promise.all([
      sendMail({
        to: process.env.ADMIN_EMAIL!,
        subject: ` New Project Request: ${typeLabels[projectType]} from ${fullName}`,
        html: adminEmailHtml,
      }),
      sendMail({
        to: email,
        subject: `We're reviewing your project requirements | A-Tech`,
        html: clientEmailHtml,
      }),
    ]);

    return NextResponse.json({ success: true, message: "Project details sent successfully" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
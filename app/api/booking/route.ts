import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@nightlifeconcierge.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      serviceType,
      dateCity,
      groupSize,
      budget,
      details,
      referral,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !dateCity) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const serviceLabels: Record<string, string> = {
      "party-planning": "Party Planning",
      "bar-tour": "Bar Tour Guide",
      "dinner-companion": "Dinner & Event Companion",
    };

    const serviceName = serviceLabels[serviceType] || serviceType;

    // Send admin notification
    await resend.emails.send({
      from: "Nightlife Concierge <bookings@nightlifeconcierge.com>",
      to: ADMIN_EMAIL,
      subject: `New Booking Request – ${serviceName}`,
      text: `New Booking Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${serviceName}
Date & City: ${dateCity}
Group Size: ${groupSize || "Not specified"}
Budget: ${budget || "Not specified"}

Event Details:
${details || "None provided"}

Referral Source: ${referral || "Not specified"}
`,
    });

    // Send customer confirmation
    await resend.emails.send({
      from: "Nightlife Concierge <bookings@nightlifeconcierge.com>",
      to: email,
      subject: "We received your booking request",
      text: `Hi ${name},

Thank you for reaching out to Nightlife Concierge! We've received your booking request for ${serviceName}.

Our team will review your details and get back to you within 24 hours to confirm everything and answer any questions you may have.

In the meantime, feel free to reply to this email if you think of anything else you'd like to share.

Looking forward to creating an unforgettable experience for you.

Warm regards,
The Nightlife Concierge Team
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { error: "Failed to process booking request" },
      { status: 500 }
    );
  }
}

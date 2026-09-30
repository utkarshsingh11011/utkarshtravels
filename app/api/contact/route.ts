import { NextResponse } from "next/server";
import siteConfig from "@/data/site.json";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      travelDate,
      destination,
      passengers,
      vehiclePreference,
      pickupLocation,
      message,
      honeypot,
    } = body;

    // Anti-spam bot trap
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry processed" });
    }

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const leadSummary = `
=============================================
NEW BOOKING INQUIRY — UTKARSH TRAVELS VARANASI
=============================================
Traveler Name:      ${name}
Contact Phone:      ${phone}
Expected Date:      ${travelDate || "Flexible / Immediate"}
Destination/Route:  ${destination || "Not specified"}
Group Size:         ${passengers || "1-4"}
Vehicle Selected:   ${vehiclePreference || "Dzire / Ertiga"}
Pickup Location:    ${pickupLocation || "Varanasi Hotel / Station / Airport"}
Special Requests:   ${message || "None"}
Received At:        ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
=============================================
Target Email:       ${siteConfig.email}
Target WhatsApp:    ${siteConfig.phoneDisplay} (Utkarsh Singh)
`;

    console.log(leadSummary);

    // If an email provider API key is provided in environment variables (e.g. RESEND_API_KEY)
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Utkarsh Travels Inquiries <onboarding@resend.dev>",
            to: [siteConfig.email],
            subject: `🛕 New Pilgrimage Cab Lead: ${name} (${destination})`,
            text: leadSummary,
          }),
        });
      } catch (emailErr) {
        console.error("Resend API dispatch error:", emailErr);
      }
    }

    // Build mailto fallback link for user's email client
    const mailtoSubject = encodeURIComponent(`Pilgrimage Tour Booking Inquiry: ${name} - ${destination}`);
    const mailtoBody = encodeURIComponent(leadSummary);
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Build direct WhatsApp lead link to Utkarsh Singh (+91 9648974238)
    const whatsappText = `*NEW TOUR INQUIRY - UTKARSH TRAVELS*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Date:* ${travelDate || "Flexible"}\n*Route:* ${destination}\n*Passengers:* ${passengers}\n*Vehicle:* ${vehiclePreference}\n*Pickup:* ${pickupLocation || "Varanasi"}\n*Notes:* ${message || "None"}\n\nPlease share availability and best price.`;
    const whatsappUrl = `https://wa.me/919648974238?text=${encodeURIComponent(whatsappText)}`;

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully! Directing to WhatsApp and email.",
      mailtoUrl,
      whatsappUrl,
      leadData: {
        name,
        phone,
        travelDate,
        destination,
        passengers,
        vehiclePreference,
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}

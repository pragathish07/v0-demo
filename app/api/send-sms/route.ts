import client from "@/lib/telnyxClient";
import { NextRequest } from "next/server";
import { 
  validateEmail, 
  validatePhoneNumber, 
  validateName,
  checkSpamPatterns,
  validateFormData 
} from "@/lib/utils";

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const formData = await req.json();

    // Server-side validation (critical!)
    const validation = validateFormData({
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      email: formData.email || '',
      phone: formData.phone || '',
      comments: formData.comments || '',
      subject: formData.subject || '',
      message: formData.message || '',
      honeypot: formData.honeypot || ''
    });

    if (!validation.valid) {
      console.warn(`[SPAM DETECTED] Validation failed:`, validation.errors, formData);
      return Response.json({ 
        success: false, 
        error: 'Invalid submission' 
      }, { status: 400 });
    }

    // Fallback if "type" is missing
    const formType = formData.type || "contact_inquiry";

    let messageBody = "";

    if (formType === "career_application") {
      messageBody = `📋 New Career Application:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Comments: ${formData.comments || "N/A"}`;
    } else if (formType === "contact_inquiry") {
      messageBody = `📩 New Contact Inquiry:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject || "N/A"}
Message: ${formData.message || "N/A"}
Time: ${formData.timestamp || new Date().toISOString()}`;
    } else {
      throw new Error(`Unknown form type: ${formType}`);
    }

    // Ensure required env vars
    if (!process.env.MY_VERIFIED_PHONE_NUMBER) {
      throw new Error("MY_VERIFIED_PHONE_NUMBER is not defined");
    }
    if (!process.env.TELNYX_NUMBER) {
      throw new Error("TELNYX_NUMBER is not defined");
    }
    if (!process.env.TELNYX_MESSAGING_PROFILE_ID) {
      throw new Error("TELNYX_MESSAGING_PROFILE_ID is not defined");
    }

    // Send SMS via Telnyx
    const result = await client.messages.create({
      from: process.env.TELNYX_NUMBER,
      to: process.env.MY_VERIFIED_PHONE_NUMBER,
      text: messageBody,
      messaging_profile_id: process.env.TELNYX_MESSAGING_PROFILE_ID,
    } as any);

    return Response.json({ success: true, result });
  } catch (error: any) {
    console.error("Error sending SMS:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
/* import { NextResponse } from "next/server";
import { PublishCommand } from "@aws-sdk/client-sns";
import snsClient from "@/lib/snsClient";

export async function POST(req: Request) {
  try {
    // Parse form data (even if we don’t use phone from form)
    const formData = await req.json();

    // Always send SMS to *your* verified number in SNS sandbox
    const params = {
      Message: `New Application:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nComments: ${formData.comments}`,
      PhoneNumber: process.env.MY_VERIFIED_PHONE_NUMBER, 
      MessageAttributes: {
        "AWS.SNS.SMS.SMSType": { DataType: "String", StringValue: "Transactional" }
      }
    };

    const command = new PublishCommand(params);
    const response = await snsClient.send(command);

    return NextResponse.json({ success: true, response  });
  } catch (error: any) {
    console.error("Error sending SMS:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
 */


import client from "@/lib/telnyxClient";

export async function POST(req: Request): Promise<Response> {
  try {
    const formData: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      comments: string;
    } = await req.json();

    // Build SMS message
    const messageBody = `New Application:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nComments: ${formData.comments}`;

    // Check for required environment variables
    if (!process.env.MY_VERIFIED_PHONE_NUMBER) {
      throw new Error("MY_VERIFIED_PHONE_NUMBER is not defined in environment variables");
    }
    
    if (!process.env.TELNYX_NUMBER) {
      throw new Error("TELNYX_NUMBER is not defined in environment variables");
    }

    if (!process.env.TELNYX_MESSAGING_PROFILE_ID) {
      throw new Error("TELNYX_MESSAGING_PROFILE_ID is not defined in environment variables");
    }
    
    // Send SMS using Telnyx
    const result = await client.messages.create({
      from: process.env.TELNYX_NUMBER, // Your Telnyx number in E.164 format
      to: process.env.MY_VERIFIED_PHONE_NUMBER, // Recipient number in E.164 format
      text: messageBody,
      messaging_profile_id: process.env.TELNYX_MESSAGING_PROFILE_ID,
    } as any); // Type assertion to bypass incorrect type definitions

    return Response.json({ success: true, result });
  } catch (error: any) {
    console.error("Error sending SMS:", error);
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}


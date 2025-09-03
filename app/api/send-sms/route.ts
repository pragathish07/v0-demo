import { NextResponse } from "next/server";
import { Vonage } from "@vonage/server-sdk";
import { log } from "console";

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

// Define interface for form data
interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    comments: string;
}

// Define interface for SMS parameters
interface SmsParams {
    to: string;
    from: string;
    text: string;
}

export async function POST(req: Request): Promise<NextResponse> {
    try {
            const body = await req.json(); // Parse JSON
    const { firstName, lastName, email, phone, comments } = body;
    log(firstName, lastName, email, phone, comments);
        /* const from = "MD_Body_Sculpting"; // sender ID
        const to = process.env.MY_PHONE_NUMBER as string;
        const text = `New Application:
                    Name: ${firstName} ${lastName}
                    Phone: ${phone}
                    Email: ${email}
                    Comments: ${comments}
                    type: "text`;

        const smsResponse = await vonage.sms.send({to, from, text}); */
        console.log('Message sent successfully');
        //console.log(smsResponse);

        return NextResponse.json({ success: true, response:  body});
    } catch (error: any) {
        console.error("Error sending SMS:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

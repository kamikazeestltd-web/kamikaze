import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "Kamikaze <onboarding@resend.dev>",
    to: email,
    subject: "You're In The Order — KAMIKAZE",
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"/></head>
      <body style="margin:0; padding:0; background:#000000; font-family: Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#000; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#0a0a0a; border:1px solid #1a1a1a;">

                <tr>
                  <td style="padding: 50px 40px 30px; border-bottom: 1px solid #1a1a1a; text-align: center;">
                    <p style="margin:0 0 12px; color:#cc0000; font-size:32px; letter-spacing: 0.3em;">神風</p>
                    <h1 style="margin:0; color:#ffffff; font-size:22px; letter-spacing: 0.4em; text-transform: uppercase; font-weight: 900;">
                      KAMIKAZE
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 48px 40px; text-align: center;">
                    <p style="color:#cc0000; font-size:10px; letter-spacing:0.4em; text-transform:uppercase; margin:0 0 20px;">
                      Welcome To The Order
                    </p>
                    <h2 style="color:#ffffff; font-size:30px; margin:0 0 24px; text-transform:uppercase; letter-spacing:0.05em; font-weight:900; line-height:1.2;">
                      Rebel With${name ? `<br/>${name.split(" ")[0]}.` : "<br/>Discipline."}
                    </h2>
                    <p style="color:#666; font-size:14px; line-height:1.8; margin:0 0 40px; max-width:400px; margin-left:auto; margin-right:auto;">
                      You are now part of something that refuses to be ordinary.
                      Early drops, exclusive access, and the movement — delivered to you first.
                    </p>

                    <a href="${process.env.NEXT_PUBLIC_SITE_URL}/shop"
                      style="display:inline-block; border:2px solid #cc0000; color:#cc0000; padding:16px 40px; font-size:10px; letter-spacing:0.3em; text-transform:uppercase; font-weight:900; text-decoration:none;">
                      Enter The Vision
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 32px 40px; border-top: 1px solid #1a1a1a; text-align:center;">
                    <p style="color:#333; font-size:11px; margin:0; line-height:1.8; letter-spacing:0.05em;">
                      Luxury streetwear for the disciplined rebel.<br/>
                      Malaysia &mdash; Est. 2024<br/><br/>
                      &copy; ${new Date().getFullYear()} KAMIKAZE. All rights reserved.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log("Welcome email sent:", data?.id, "to:", email);
  return NextResponse.json({ success: true });
}

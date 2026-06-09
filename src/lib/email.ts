import { Resend } from "resend";

interface OrderItem {
  name: string;
  size: string;
  quantity: number;
  price: number;
}

interface SendOrderConfirmationParams {
  to: string;
  customerName: string;
  orderItems: OrderItem[];
  total: number;
  orderId: string;
}

export async function sendOrderConfirmation({
  to,
  customerName,
  orderItems,
  total,
  orderId,
}: SendOrderConfirmationParams) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const itemsHtml = orderItems
    .map(
      (item) => `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a;">
          <strong>${item.name}</strong><br/>
          <span style="color: #888; font-size: 12px;">Size: ${item.size} &middot; Qty: ${item.quantity}</span>
        </td>
        <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; text-align: right; color: #c8a96e;">
          RM${item.price * item.quantity}
        </td>
      </tr>
    `
    )
    .join("");

  await resend.emails.send({
    from: "Kamikaze <onboarding@resend.dev>",
    to,
    subject: `Order Confirmed — #${orderId.slice(-8).toUpperCase()}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"/></head>
      <body style="margin:0; padding:0; background:#0a0a0a; font-family: Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#111; border:1px solid #2a2a2a;">

                <tr>
                  <td style="padding: 40px; border-bottom: 1px solid #2a2a2a;">
                    <h1 style="margin:0; color:#f5f5f0; font-size:24px; letter-spacing: 0.3em; text-transform: uppercase;">
                      KAMIKAZE
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 40px;">
                    <p style="color:#c8a96e; font-size:11px; letter-spacing:0.3em; text-transform:uppercase; margin:0 0 16px;">
                      Order Confirmed
                    </p>
                    <h2 style="color:#f5f5f0; font-size:28px; margin:0 0 24px; text-transform:uppercase; letter-spacing:0.05em;">
                      Thank you${customerName ? `, ${customerName}` : ""}.
                    </h2>
                    <p style="color:#888; font-size:14px; line-height:1.6; margin:0 0 32px;">
                      Your order has been confirmed. We&apos;ll notify you once it ships.
                    </p>

                    <p style="color:#555; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; margin:0 0 8px;">
                      Order Reference
                    </p>
                    <p style="color:#f5f5f0; font-size:14px; font-family:monospace; margin:0 0 32px;">
                      #${orderId.slice(-8).toUpperCase()}
                    </p>

                    <p style="color:#555; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; margin:0 0 16px;">
                      Your Items
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="color:#f5f5f0; font-size:14px;">
                      ${itemsHtml}
                      <tr>
                        <td style="padding: 16px 0 0; font-weight:bold; text-transform:uppercase; letter-spacing:0.1em;">
                          Total
                        </td>
                        <td style="padding: 16px 0 0; text-align:right; color:#c8a96e; font-size:18px; font-weight:bold;">
                          RM${total}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 32px 40px; border-top: 1px solid #2a2a2a;">
                    <p style="color:#444; font-size:12px; margin:0; line-height:1.6;">
                      Questions? Contact us at info@kamikazebrand.com<br/>
                      &copy; ${new Date().getFullYear()} Kamikaze. All rights reserved.
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
}

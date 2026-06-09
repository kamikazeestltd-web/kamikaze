import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sendOrderConfirmation } from "@/lib/email";

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name ?? "";

    if (customerEmail && process.env.RESEND_API_KEY) {
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id
      );

      const orderItems = lineItems.data.map((item) => ({
        name: item.description ?? item.price?.product?.toString() ?? "Item",
        size: "",
        quantity: item.quantity ?? 1,
        price: (item.amount_total ?? 0) / 100 / (item.quantity ?? 1),
      }));

      await sendOrderConfirmation({
        to: customerEmail,
        customerName,
        orderItems,
        total: (session.amount_total ?? 0) / 100,
        orderId: session.id,
      });
    }
  }

  return NextResponse.json({ received: true });
}

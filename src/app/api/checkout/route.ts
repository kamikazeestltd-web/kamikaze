import { NextResponse } from "next/server";
import Stripe from "stripe";
import { CartItem } from "@/types";

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured. Add STRIPE_SECRET_KEY to your environment variables." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { items }: { items: CartItem[] } = await req.json();

  if (!items?.length) {
    return NextResponse.json({ error: "No items in cart." }, { status: 400 });
  }

  const lineItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.product.name,
        description: `Size: ${item.size}`,
        images: [item.product.images[0]],
      },
      unit_amount: item.product.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/checkout/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/cart`,
    shipping_address_collection: { allowed_countries: ["US", "GB", "CA", "AU"] },
  });

  return NextResponse.json({ url: session.url });
}

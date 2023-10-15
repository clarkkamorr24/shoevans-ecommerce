import { NextResponse } from "next/server"
// @ts-ignore
import { validateCartItems } from "use-shopping-cart/utilities"
import { client } from "@/sanity/lib/client"
import { SanityProduct } from "@/config/inventory"
import { groq } from "next-sanity"
import { stripe } from "@/lib/stripe"

export async function POST(request: Request) {
  const product = await client.fetch<SanityProduct>(groq`*[_type == "product"] {
    "id": _id,
    name,
    sku,
    image,
    images,
    price,
    currency,
    description,
    sizes,
    categories,
    colors,
  }`)
  const cartDetails = await request.json()
  const lineItems = validateCartItems(product, cartDetails)
  const origin = request.headers.get('origin')

  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ['card'],
    line_items: lineItems,
    shipping_address_collection: {
        allowed_countries: ['PH']
    },
    shipping_options: [
     {
        shipping_rate: "shr_1NzDj6HOCOQRG6iE1GohxY63"
     }   
    ],
    billing_address_collection: "auto",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`
  })

  return NextResponse.json(session)
}

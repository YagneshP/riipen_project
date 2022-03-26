import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const formattedItems = req.body.line_items.map((item) => ({
    ...item,
    price: item.price.raw * 100,
  }));
  // console.log("formattedItems", formattedItems);
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const params = {
        mode: "payment",
        line_items: [
          // line items should coming from cart
          {
            name: "Airpod",
            price: 10000,
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/donate-with-checkout`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);
      console.log("session", checkoutSession);
      res.status(200).json(checkoutSession);
    } catch (err) {
      // const errorMessage =
      //   err instanceof Error ? err.message : 'Internal server error'
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

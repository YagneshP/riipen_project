import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // console.log("tokeenId", req.body.id);
  const formattedItems = req.body.line_items.map((item) => ({
    price_data: {
      currency: "cad",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price.raw * 100,
    },

    quantity: item.quantity,
  }));
  // console.log("formattedItems", formattedItems);
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const params = {
        mode: "payment",
        line_items: [
          // line items should coming from cart
          ...formattedItems,
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/checkout`,
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

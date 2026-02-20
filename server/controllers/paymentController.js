import Stripe from "stripe";
import userModel from "../models/userModels.js";
import dotenv from "dotenv";

dotenv.config(); 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  console.log("Payment body received:", req.body);
  try {
    const { userId, price, credits } = req.body;

    if (!userId || !price || !credits) {
      return res.json({ success: false, message: "Missing payment data" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${credits} Credits Package`,
            },
            unit_amount: Number(price) * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:5173/result?success=true",
      cancel_url: "http://localhost:5173/buy",
      metadata: {
        userId: String(userId),
        credits: String(credits),
      },
    });

    res.json({ success: true, url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};




export default createCheckoutSession;

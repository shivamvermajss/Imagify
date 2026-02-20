import Stripe from "stripe";
import userModel from "../models/userModels.js";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log("Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const userId = session.metadata.userId;
    const credits = Number(session.metadata.credits);

    await userModel.findByIdAndUpdate(userId, {
      $inc: { creditBalance: credits },
    });

    console.log("✅ Credits updated successfully");
  }

  res.json({ received: true });
};

export default stripeWebhook;

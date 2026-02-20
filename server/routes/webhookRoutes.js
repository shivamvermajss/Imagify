import express from "express";
import Stripe from "stripe";
import userModel from "../models/userModels.js";

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/webhook", async (req, res) => {
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
      const credits = parseInt(session.metadata.credits);

      const user = await userModel.findById(userId);
      if (user) {
        user.creditBalance += credits;
        await user.save();
      }
    }

    res.json({ received: true });
  }
);

export default router;

import express from "express";
import createCheckoutSession from "../controllers/paymentController.js";

const paymentRouter = express.Router();

paymentRouter.post("/create-checkout", createCheckoutSession);

export default paymentRouter;

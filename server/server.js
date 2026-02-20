import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import paymentRouter from "./routes/paymentRoutes.js";
import webhookRoutes from "./routes/webhookRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: "https://imagify-coral.vercel.app",
  credentials: true
}));

app.use(
  "/api/payment/webhook",
  express.raw({ type: "application/json" })
);

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);
app.use("/api/payment", paymentRouter);

app.use("/api/payment", webhookRoutes);

app.get('/', (req, res) => {
    res.send('api is working !');
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
});
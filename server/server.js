import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import userModel from './models/userModels.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use('/api/user',userRouter);


app.get('/', (req, res) => {
    res.send('api is working !');
})

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
})






import userModel from "../models/userModels.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userAuth from "../middlewares/auth.js";




const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Please fill all the fields' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

        res.json({
            success: true,
            message: 'User registered successfully',
            token,
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                creditBalance: newUser.creditBalance
            }
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.json({
            success: true,
            message: 'User logged in successfully',
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                creditBalance: user.creditBalance
            }
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};



const userCredits = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await userModel.findById(userId);

        res.json({
            success: true,
            credits: user.creditBalance,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                creditBalance: user.creditBalance
            }
        });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};    
export { registerUser, loginUser, userCredits };       

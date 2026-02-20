import axios from "axios";
import FormData from "form-data";
import userModel from "../models/userModels.js";




const generateImage = async (req, res) => {
    try {
        const { prompt, userId } = req.body;

        if (!prompt || !userId) {
            return res.json({ success: false, message: "Missing Details" });
        }

        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        if (user.creditBalance <= 0) {
            return res.status(403).json({
            success: false,
            message: "No credits left",
            creditBalance: user.creditBalance
            });
        }   


        const formData = new FormData();
        formData.append("prompt", prompt);

        const { data } = await axios.post(
            "https://clipdrop-api.co/text-to-image/v1",
            formData,
            {
                headers: {
                    "x-api-key": process.env.CLIPDROP_API,
                },
                responseType: "arraybuffer",
            }
        );

        const base64Image = Buffer.from(data, "binary").toString("base64");
        const resultImage = `data:image/png;base64,${base64Image}`;

        user.creditBalance -= 1;
        await user.save();

        res.json({
            success: true,
            message: "Image generated successfully",
            image: resultImage,
            creditBalance: user.creditBalance,
        });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

export default generateImage;

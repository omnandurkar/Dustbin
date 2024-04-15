import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Review from './models/Review.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
}

connectDB();


app.post("/review", async (req, res) => {
    try {
        const { name, message, userPhoto } = req.body;

        const review = await Review.create({
            name,
            message,
            userPhoto
        });

        res.json({
            success: true,
            message: "Review Added",
            data: review
        });
    } catch (error) {
        console.error("Error adding review:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add review"
        });
    }
});

app.get("/review", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json({
            success: true,
            message: "Reviews fetched successfully",
            data: reviews
        });
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch reviews"
        });
    }
})










app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


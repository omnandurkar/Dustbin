import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Review from './models/Review.js';
import Contact from './models/Contact.js';
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

        if(!message) {
            return res.status(400).json({
                success: false,
                message: "Review Field Cannot Be Empty"
            });
        }

        if(!name) {
            return res.status(400).json({
                success: false,
                message: "Login is required"
            });
        }

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

app.delete("/review/:id", async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Review Deleted",
            data: review
        });
    } catch (error) {
        console.error("Error deleting review:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete review"
        });
    }
})

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    // Check if any field is empty
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields."
        });
    }

    const contact = await Contact.create({
        name,
        email,
        message
    });

    res.status(201).json({
        success: true,
        message: "Contact Request Sent",
        data: contact
    });
});


app.get("/contact", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json({
            success: true,
            message: "Contact Requests fetched successfully",
            data: contacts
        });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch contacts"
        });
    }
})










app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


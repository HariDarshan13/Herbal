// routes/feedbackRoutes.js
import express from "express";
import Feedback from "../models/Feedback.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /api/feedback
router.post("/", async (req, res) => {
  try {
    const { name, email, type, remedyId, rating, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !type || !subject || !message) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    // Save feedback to MongoDB
    const newFeedback = new Feedback({ name, email, type, remedyId, rating, subject, message });
    await newFeedback.save();

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for your feedback!",
      text: `Hi ${name},\n\nThank you for submitting your feedback on Herbal Heritage.\n\nWe appreciate your time and your valuable input!\n\n- Herbal Heritage Team`,
    };

    // Send email and wait for completion
    await transporter.sendMail(mailOptions);
    console.log(`✅ Feedback confirmation email sent to ${email}`);

    // Respond to frontend
    res.status(201).json({ message: "Feedback submitted successfully" });

  } catch (err) {
    console.error("❌ Feedback submission error:", err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

export default router;

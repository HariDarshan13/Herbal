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

    // Respond to frontend immediately
    res.status(201).json({ message: "Feedback submitted successfully" });

    // Send confirmation email asynchronously
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Gmail email
        pass: process.env.GMAIL_PASS, // App password
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for your feedback!",
      text: `Hi ${name},\n\nThank you for submitting your feedback on Herbal Heritage.\n\nWe appreciate your time and valuable input!\n\n- Herbal Heritage Team`,
    };

    transporter.sendMail(mailOptions)
      .then(() => console.log(`✅ Feedback email sent to ${email}`))
      .catch((err) => console.error("❌ Email send error:", err));

  } catch (err) {
    console.error("❌ Feedback submission error:", err);

    // Only send error if response hasn't already been sent
    if (!res.headersSent) {
      res.status(500).json({ message: "Server error: " + err.message });
    }
  }
});

export default router;


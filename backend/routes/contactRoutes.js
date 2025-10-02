import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js'; // Import your model

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail app password
  },
});

router.post('/', async (req, res) => {
  const { name, email, subject, message, urgency } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Save to DB
    const contact = new Contact({ name, email, subject, message, urgency });
    await contact.save();

    // Send email
    await transporter.sendMail({
      from: `"Herbal Heritage" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting Herbal Heritage. We received your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>We will get back to you within 24 hours.</p>
        <br/>
        <p>Best regards,<br/>Herbal Heritage Team</p>
      `,
    });

    res.status(200).json({ message: 'Message saved successfully. Thank you!' });
  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;

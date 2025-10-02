import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject, message, urgency } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Save to DB
    const contact = new Contact({ name, email, subject, message, urgency });
    await contact.save();

    // Respond to frontend
    res.status(200).json({ message: 'Message saved successfully. Thank you!' });

  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;

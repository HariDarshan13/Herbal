import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  urgency: { type: String, default: 'medium' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Contact', contactSchema);

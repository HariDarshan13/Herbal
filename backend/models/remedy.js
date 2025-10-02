const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RemedySchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { en: String, ta: String },
  symptoms: { en: [String], ta: [String] },
  ingredients: { en: [String], ta: [String] },
  preparation: { en: String, ta: String },
  dosage: { en: String, ta: String },
  safetyTips: { en: [String], ta: [String] },
  category: String,
  difficulty: { type: String, enum: ['easy','medium','hard'] },
  prepTime: Number,
  submittedBy: String,
  status: { type: String, enum: ['approved','pending','rejected'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Remedy', RemedySchema);

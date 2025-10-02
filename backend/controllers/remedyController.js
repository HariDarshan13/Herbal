import Remedy from "../models/remedie.js";

// @desc Create a new remedy
// @route POST /api/remedies
export const createRemedy = async (req, res) => {
  try {
    const remedy = new Remedy(req.body);
    const saved = await remedy.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Get all remedies
// @route GET /api/remedies
export const getRemedies = async (req, res) => {
  try {
    const remedies = await Remedy.find().sort({ createdAt: -1 });
    res.json(remedies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

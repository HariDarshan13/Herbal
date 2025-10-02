const express = require('express');
const router = express.Router();
const Remedy = require('../models/remedy');

// GET all remedies
router.get('/', async (req, res) => {
  try {
    const remedies = await Remedy.find().sort({ id: 1 });
    res.json(remedies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create remedy
router.post('/', async (req, res) => {
  try {
    const payload = req.body;
    const remedy = new Remedy(payload);
    await remedy.save();
    res.status(201).json(remedy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

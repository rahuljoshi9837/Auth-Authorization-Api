const express = require('express');
const Record = require('../models/Record');
const auth = require('../middleware/auth');

const router = express.Router();

// Get records
router.get('/', auth, async (req, res) => {
  try {
    let records;

    if (req.user.role === 'admin') {
      records = await Record.find({ userId: req.user._id });
    } else {
      records = await Record.find({ userId: req.user._id });
    }

    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

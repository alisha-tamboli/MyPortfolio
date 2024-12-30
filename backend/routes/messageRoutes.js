const express = require('express');
const router = express.Router();
const Message = require('../models/Message'); // Import the Message model

// POST route to save a message
router.post('/send-message', async (req, res) => {
  const { text, sender } = req.body;

  try {
    const newMessage = new Message({ text, sender }); // Automatically adds the timestamp
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message saved successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to save message.' });
  }
});

module.exports = router;

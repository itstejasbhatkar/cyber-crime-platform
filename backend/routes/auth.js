const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');

// Rate limiting for OTP requests
const otpLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 OTP requests per hour
  message: 'Too many OTP requests. Please try again later.'
});

// Validate phone number
const validatePhone = (phone) => {
  const re = /^\+?[1-9]\d{9,14}$/;
  return re.test(phone);
};

// Send SMS OTP
router.post('/send-otp', otpLimiter, async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone || !validatePhone(phone)) {
      return res.status(400).json({ message: 'Invalid phone number' });
    }

    // For development, just return success without actually sending SMS
    res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error in send-otp:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
  try {
    const { otp } = req.body;

    if (!otp) {
      return res.status(400).json({ message: 'OTP is required' });
    }

    // For development, accept any OTP
    res.json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error in verify-otp:', error);
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

module.exports = router;

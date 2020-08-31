const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    body('name', 'Name is required').trim().not().isEmpty(),
    body('email', 'Please include a valid email').isEmail().normalizeEmail(),
    body('password', 'Please include a password with 6 or more characters')
      .trim()
      .isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send('Users route');
  }
);

module.exports = router;

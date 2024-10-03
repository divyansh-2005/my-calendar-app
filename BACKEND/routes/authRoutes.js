// routes/auth.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, authenticatedUser } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');

// Register new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);
router.get('/me',auth, authenticatedUser);

module.exports = router;

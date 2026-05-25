const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

router.post('/login', login);
// router.post('/register', register); // Thêm controller register tương tự

module.exports = router;
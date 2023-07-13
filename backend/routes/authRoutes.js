const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');

const Router = express.Router();

// Route: POST /api/auth/signup
Router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters')
  ],
  authController.signup
);

// Route: POST /api/auth/login
Router.post('/login', authController.login);

module.exports = Router;
const express = require('express');
const router = express.Router();

// Importing controllers
const userController = require('../controllers/userController');

// Define routes
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;

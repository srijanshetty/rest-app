var express = require('express');
var userRouter = express.Router();

// Required controllers
var userController = require('../controllers/user');
var authController = require('../controllers/auth');

// Define routes for /users
userRouter.route('/')
          .post(userController.postUsers)
          .get(authController.isAuthenticated, userController.getUsers);

// Export the router
module.exports = userRouter;

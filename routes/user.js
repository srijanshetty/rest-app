var express = require('express');

var userRouter = express.Router();
var userController = require('../controllers/user');

userRouter.route('/')
          .post(userController.postUsers)
          .get(userController.getUsers);

module.exports = userRouter;

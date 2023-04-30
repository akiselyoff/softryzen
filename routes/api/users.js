const express = require('express');
const router = express.Router();
const { controllerWrapper } = require('../../helpers');
const currentUser = require('../../controllers/users/currentUser');
const { authenticate } = require('../../middlewares');

router.get('/current', authenticate, controllerWrapper(currentUser));

module.exports = router;

const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/auth');
const { controllerWrapper } = require('../../helpers');
const { validationBody } = require('../../middlewares');
const { registerSchema } = require('../../models/user');

router.post('/register', validationBody(registerSchema), controllerWrapper(controllers.register));

module.exports = router;

const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/auth');
const { controllerWrapper } = require('../../helpers');
const { validationBody, authenticate } = require('../../middlewares');
const { registerSchema, loginSchema } = require('../../models/user');

router.post('/register', validationBody(registerSchema), controllerWrapper(controllers.register));
router.post('/login', validationBody(loginSchema), controllerWrapper(controllers.login));
router.get('/logout', authenticate, controllerWrapper(controllers.logout));

module.exports = router;

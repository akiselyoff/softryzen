const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/movies');
const { controllerWrapper } = require('../../helpers');
const { validationBody, authenticate } = require('../../middlewares');
const { movieAddSchema } = require('../../models/movie');

router.get('/', authenticate, controllerWrapper(controllers.getAll));
router.get('/:movieId', controllerWrapper(controllers.getById));
router.post('/', authenticate, validationBody(movieAddSchema), controllerWrapper(controllers.add));
router.put('/:movieId', validationBody(movieAddSchema), controllerWrapper(controllers.updateById));
router.delete('/:movieId', controllerWrapper(controllers.removeById));

module.exports = router;

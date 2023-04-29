const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/movies');
const { controllerWrapper } = require('../../helpers');
const { validationBody } = require('../../middlewares');
const { movieAddSchema } = require('../../models/movie');

router.get('/', controllerWrapper(controllers.getAll));
router.get('/:movieId', controllerWrapper(controllers.getById));
router.post('/', validationBody(movieAddSchema), controllerWrapper(controllers.add));
router.put('/:movieId', validationBody(movieAddSchema), controllerWrapper(controllers.updateById));
router.delete('/:movieId', controllerWrapper(controllers.removeById));

module.exports = router;

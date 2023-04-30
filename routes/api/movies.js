const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/movies');
const { controllerWrapper } = require('../../helpers');
const { validationBody, authenticate, isValidId } = require('../../middlewares');
const { movieAddSchema } = require('../../models/movie');

router.get('/', authenticate, controllerWrapper(controllers.getAll));
router.get('/:movieId', authenticate, isValidId, controllerWrapper(controllers.getById));
router.post('/', authenticate, validationBody(movieAddSchema), controllerWrapper(controllers.add));
router.put(
  '/:movieId',
  authenticate,
  isValidId,
  validationBody(movieAddSchema),
  controllerWrapper(controllers.updateById)
);
router.delete('/:movieId', authenticate, isValidId, controllerWrapper(controllers.removeById));

module.exports = router;

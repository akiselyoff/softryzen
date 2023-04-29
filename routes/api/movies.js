const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/movies');
const { controllerWrapper } = require('../../helpers');

router.get('/', controllerWrapper(controllers.getAll));
router.get('/:movieId', controllerWrapper(controllers.getById));
router.post('/', controllerWrapper(controllers.add));
router.put('/:movieId', controllerWrapper(controllers.updateById));
router.delete('/:movieId', controllerWrapper(controllers.removeById));

module.exports = router;

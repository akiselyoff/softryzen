const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/movies');

router.get('/', controllers.getAll);
router.get('/:movieId', controllers.getById);
router.post('/', controllers.add);
router.put('/:movieId', controllers.updateById);
router.delete('/:movieId', controllers.removeById);

module.exports = router;

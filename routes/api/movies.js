const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/movies');

router.get('/', controllers.getAll);
router.post('/', controllers.add);
// router.get('/:movieId', controllers.getById);
// router.delete('/:movieId', controllers.removeById);
// router.put('/:movieId', controllers.updateById);

module.exports = router;

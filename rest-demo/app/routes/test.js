const Router = require('koa-router');
const router = new Router({ prefix: '/tests' });

const {
  find, findById, create, update, delete: del,
} = require('../controllers/test');

router.get('/',find)

router.get('/:id', findById)
router.post('/',create)
router.put('/:id',update)
router.delete('/:id',del)

module.exports = router;
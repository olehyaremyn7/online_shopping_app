const {Router} = require('express')
const passport = require('passport')
const adminProductControllers = require('../controllers/product.admin.controllers')
const upload = require('../middleware/upload.middleware')
const router = Router()

// localhost:5000/api/admin/product
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), adminProductControllers.createController)

// localhost:5000/api/admin/product
router.get('/', passport.authenticate('jwt', {session: false}), adminProductControllers.getAllController)

// localhost:5000/api/admin/product/:id
router.get('/:id', passport.authenticate('jwt', {session: false}), adminProductControllers.getByIdController)

// localhost:5000/api/admin/product/:id
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), adminProductControllers.updateController)

// localhost:5000/api/admin/product/:id
router.delete('/:id', passport.authenticate('jwt', {session: false}), adminProductControllers.removeController)

module.exports = router

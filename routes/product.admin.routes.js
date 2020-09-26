const {Router} = require('express')
const passport = require('passport')
const adminProductControllers = require('../controllers/product.admin.controllers')
const upload = require('../middleware/upload.middleware')
const router = Router()

// localhost:5000/api/admin/product
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), adminProductControllers.createController)

module.exports = router
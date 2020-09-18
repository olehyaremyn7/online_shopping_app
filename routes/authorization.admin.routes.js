const {Router} = require('express')
const adminAuthorizationControllers = require('../controllers/authorization.admin.controllers')
const router = Router()

// localhost:5000/api/admin/authorization/login
router.post('/login', adminAuthorizationControllers.loginController)

// localhost:5000/api/admin/authorization/registration
router.post('/registration', adminAuthorizationControllers.registrationController)

module.exports = router
const {Router} = require('express')
const passport = require('passport')
const adminDashboardControllers = require('../controllers/dashboard.admin.controllers')
const router = Router()

// localhost:5000/api/admin/dashboard
router.get('/', passport.authenticate('jwt', {session: false}), adminDashboardControllers.getAll)

module.exports = router
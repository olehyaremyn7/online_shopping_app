const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const AdminAuthorizationRouter = require('./routes/authorization.admin.routes')
const AdminDashboardRouter = require('./routes/dashboard.admin.routes')

const app = express()

app.use(passport.initialize())
require('./middleware/passport.middleware')(passport)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/admin/authorization', AdminAuthorizationRouter);
app.use('/api/admin/dashboard', AdminDashboardRouter)

module.exports = app
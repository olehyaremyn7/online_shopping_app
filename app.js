const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const AdminAuthorizationRouter = require('./routes/authorization.admin.routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/admin/authorization', AdminAuthorizationRouter);

module.exports = app
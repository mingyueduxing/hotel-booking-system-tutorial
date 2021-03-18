require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const { sequelize } = require('./models')

const app = express()
app.use(bodyParser())

app.use(helmet())
app.use(cors())

app.use('/api', routes)

app.listen('3000', async () => {
	console.log('App started at PORT 3000')
	await sequelize.authenticate()
	console.log('Database connected', process.env.MYSQL_HOST, process.env.MYSQL_DB_NAME)
})
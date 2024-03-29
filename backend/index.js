require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const routes = require('./routes')
const { sequelize } = require('./models')

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet())
app.use(cors())

app.use('/api', routes)

app.listen('3000', async () => {
	console.log('App started at PORT 3000')
	await sequelize.authenticate()
	console.log('Database connected', process.env.MYSQL_HOST, process.env.MYSQL_DB_NAME)
})
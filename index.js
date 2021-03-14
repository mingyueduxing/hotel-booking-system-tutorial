require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const { sequelize } = require('./models')

const app = express()

app.use('/api', routes);

sequelize.sync()

app.listen('3000', () => {
	console.log('App started at PORT 3000')
})
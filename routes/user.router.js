const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
	res.send('user api reponse')
})

router.get('/:id', (req, res) => {
	res.send('user get by id api reponse')
})

router.post('/', (req, res) => {
	res.send('create user api reponse')
})

router.put('/', (req, res) => {
	res.send('update user api reponse')
})

module.exports = router

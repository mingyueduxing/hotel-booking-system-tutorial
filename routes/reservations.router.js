const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
	res.send('resevations api reponse')
})

router.get('/:id', (req, res) => {
	res.send('resevations get by id api reponse')
})

router.post('/', (req, res) => {
	res.send('create resevations api reponse')
})

router.put('/', (req, res) => {
	res.send('update resevations api reponse')
})

module.exports = router

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('rooms api reponse')
});

router.get('/:id', (req, res) => {
	res.send('room by id api reponse')
});

router.post('/', (req, res) => {
	res.send('create room api reponse')
});

module.exports = router;
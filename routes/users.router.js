const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('users api reponse')
});

router.get('/:id', (req, res) => {
	res.send('users by id api reponse')
});

router.post('/', (req, res) => {
	res.send('create users api reponse')
});

module.exports = router;
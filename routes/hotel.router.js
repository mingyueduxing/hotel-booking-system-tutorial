const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('hotel api reponse')
});

router.get('/:id', (req, res) => {
	res.send('hotel by id api reponse')
});

router.post('/', (req, res) => {
	res.send('create hotel api reponse')
});
module.exports = router;
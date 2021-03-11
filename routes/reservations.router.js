const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('resevations api get reponse');
});

router.post('/', (req, res) => {
	res.send('resevations api post reponse');
});

router.put('/', (req, res) => {
	res.send('resevations api put reponse');
});

router.delete('/', (req, res) => {
	res.send('resevations api delete reponse');
});

module.exports = router;

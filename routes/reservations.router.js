const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('resevations api reponse')
});

module.exports = router;
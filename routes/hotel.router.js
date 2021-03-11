const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('hotel api reponse')
});

module.exports = router;
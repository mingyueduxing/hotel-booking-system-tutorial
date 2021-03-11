const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('hotel api  get response');
});

router.post('/', (req, res) => {
	res.send('hotel api  post response');
});
router.put('/', (req, res) => {
	res.send('hotel api put response');
});
router.delete('/', (req, res) => {
	res.send('hotel api delete response');
});

module.exports = router;

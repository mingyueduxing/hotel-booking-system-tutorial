const express = require('express');
const { Hotel } = require('../models')

const router = express.Router();

router.get('/', (req, res) => {
	Hotel.findOne().then(data => res.json(data))
});

router.post('/', (req, res) => {
	Hotel.create(req.body).then(data => res.json(data))
});

module.exports = router;
const express = require('express');
const { Hotel } = require('../models')

const router = express.Router();

router.get('/', (req, res) => {
	Hotel.findAll().then(data => res.send(data))
});

router.post('/', (req, res) => {
	Hotel.create(req.body).then(data => res.send(data))
});

module.exports = router;
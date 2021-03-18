const express = require('express');
const { Room } = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
	Room.findAll().then(data => res.json(data))
});

router.get('/:id', (req, res) => {
	Room.findOne({where: {roomId: req.params.id}, include: 'Images'}).then(data => res.json(data))
});

router.post('/', (req, res) => {
	rooms.create(req.body).then(data => res.json(data))
});

module.exports = router;
const express = require('express');
const { Image } = require('../models')

const router = express.Router();

router.get('/:roomId', (req, res) => {
    Image.findAll({ where: { roomId: req.params.roomId, type: 'room' } }).then(data => res.json(data))
});

router.get('/type/:type', (req, res) => {
    Image.findAll({ where: { type: req.params.type } }).then(data => res.json(data))
});

router.get('/', (req, res) => {
    Image.findAll().then(data => res.json(data))
});

module.exports = router;
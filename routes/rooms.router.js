const express = require('express');
const { rooms } = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
	rooms.findAll().then((data) => res.send(data));
});

router.get('/:id', (req, res) => {
	const roomId = req.params.id | 0;
	rooms.findAll({ where: { id: roomId } }).then((data) => res.send(data));
});

router.post('/:id', (req, res) => {
	rooms
		.create(req.body)
		.then((data) => res.send(`Room ${data[0].roomId} has been created.`));
});

router.put('/:roomId', async (req, res) => {
	const roomId = req.params.roomId;
	const data = req.body;
	await rooms.update(data, { where: { roomId } });
	const updatedRoom = await rooms.findAll({ where: { roomId } });
	res.send(`${updatedRoom[0].roomId} has been updated`);
});

//patch -- just update

router.delete('/:roomId', async (req, res) => {
	const roomId = req.params.roomId;
	await rooms.destroy({ where: { roomId } });
	res.send(`Room ${roomId} has been deleted`);
});

module.exports = router;

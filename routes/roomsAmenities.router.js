const express = require('express');
const { roomsAmenities } = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
	roomsAmenities.findAll().then((data) => res.send(data));
});

router.post('/', (req, res) => {
	const roomId = req.body.roomId;
	roomsAmenities.create(req.body).then(() =>
		res.send(
			`${roomId} has ${roomsAmenities.findAll({
				where: { roomId: roomId },
			})}.`
		)
	);
});

router.put('/:roomId', async (req, res) => {
	const roomId = req.params.roomId;
	const data = req.body;
	await roomsAmenities.update(data, { where: { roomId } });
	const updatedRooms = await roomsAmenities.findAll({ where: { roomId } });
	res.send(`${roomId} added ${updatedRooms[0].amenityID}`);
});

router.delete('/:id', async (req, res) => {
	const id = req.params.id | 0;
	await roomsAmenities.destroy({ where: { id } });
	await roomsAmenities
		.findAll()
		.then((data) => res.send(`There is ${data.length} records left.`));
});

module.exports = router;

const express = require('express');
const { reservations } = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
	reservations.findAll().then((data) => res.send(data));
});

router.post('/', (req, res) => {
	const guestFirstName = req.body.firstName;
	const guestlastName = req.body.lastName;
	const bookedRoomId = req.body.roomId;
	reservations
		.create(req.body)
		.then(
			res.send(
				`${guestFirstName} ${guestlastName}'s reservation for room ${bookedRoomId} has been made.`
			)
		);
});

router.put('/:id', (req, res) => {
	const guestFirstName = req.body.firstName;
	const guestlastName = req.body.lastName;
	const bookedRoomId = req.params.id;
	reservations
		.update(req.body, { where: { roomId: bookedRoomId } })
		.then(
			res.send(
				`${guestFirstName} ${guestlastName}'s reservation for room ${bookedRoomId} has been updated.`
			)
		);
});

router.delete('/:id', async (req, res) => {
	const bookedRoomId = req.params.id;
	const data = {
		firstName: null,
		lastName: null,
		checkin: null,
		checkout: null,
		status: 'available',
		notes: null,
		payment: null,
	};
	await reservations.update(data, { where: { roomId: bookedRoomId } });
	res.send(`Room ${bookedRoomId}'s reservation has been cancelled.`);
});

module.exports = router;

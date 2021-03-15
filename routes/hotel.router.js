const express = require('express');
const { hotel } = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
	hotel.findAll().then((data) => res.send(data));
});

router.post('/', (req, res) => {
	const nameOfHotel = req.body.name;
	hotel.create(req.body).then(() => res.send(`Hotel ${nameOfHotel} created.`));
});

router.put('/:id', async (req, res) => {
	const id = req.params.id | 0;
	const data = req.body;
	await hotel.update(data, { where: { id: id } });
	const updatedHotel = await hotel.findAll({ where: { id: id } });
	res.send(`${updatedHotel[0].name} has been updated`);
});

router.delete('/:id', async (req, res) => {
	const id = req.params.id;
	await hotel.destroy({ where: { id: id } });
	await hotel
		.findAll()
		.then((data) => res.send(`There is ${data.length} records left.`));
});

module.exports = router;

const express = require('express');
const { amenities } = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
	amenities.findAll().then((data) => res.send(data));
});

router.post('/', (req, res) => {
	const nameOfAmenity = req.body.name;
	amenities.create(req.body).then(() => res.send(`${nameOfAmenity} added.`));
});

router.put('/:id', async (req, res) => {
	const id = req.params.id | 0;
	const data = req.body;
	await amenities.update(data, { where: { id: id } });
	const updatedamenity = await amenities.findAll({ where: { id: id } });
	res.send(`${updatedamenity[0].name} has been updated`);
});

router.delete('/:id', async (req, res) => {
	const id = req.params.id;
	await amenities.destroy({ where: { id: id } });
	await amenities
		.findAll()
		.then((data) => res.send(`There is ${data.length} records left.`));
});

module.exports = router;

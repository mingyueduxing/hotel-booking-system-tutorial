const express = require('express');
const { users } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
	await users.findAll().then((data) => res.send(data));
});

router.get('/:id', (req, res) => {
	const userId = req.params.id | 0;
	users.findAll({ where: { id: userId } }).then((data) => res.send(data));
});

router.post('/', async (req, res) => {
	const nameOfUser = req.body.name;
	await users
		.create(req.body)
		.then(res.status(201).send(`${nameOfUser}'s account has been created.`));
});

router.post('/bulk/', async (req, res) => {
	if (Array.isArray(req.body)) {
		const nameOfUsers = req.body.map((item) => item.name);
		await users
			.bulkCreate(req.body)
			.then(
				res.send(`Accounts for ${nameOfUsers.join(', ')} have been created.`)
			);
	} else {
		res.send(`Invalid information...`);
	}
});

router.put('/:name', async (req, res) => {
	const userId = req.params.name.split('%20').join(' ');
	const data = req.body;
	await users.update(data, { where: { name: userId } });
	const updatedUser = await users.findAll({ where: { name: userId } });
	res.send(`${updatedUser[0].name} has been updated`);
});

//patch -- just update

router.delete('/:name', async (req, res) => {
	const userId = req.params.name.split('%20').join(' ');
	await users.destroy({ where: { name: userId } });
	res.send(`${userId} has been deleted`);
});

module.exports = router;

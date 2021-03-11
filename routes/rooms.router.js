const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('users api reponse');
});

router.get('/:id', (req, res) => {
	res.send('user by id api reponse');
});

router.post('/:id', (req, res) => {
	res.send('post user by id api reponse');
});

router.put('/', (req, res) => {
	res.send('put users api reponse');
});

router.put('/:id', (req, res) => {
	res.send('put user by id api reponse');
});

//patch -- just update

router.delete('/', (req, res) => {
	res.send('delete user api reponse');
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => { 
	res.send('get all users;')
})

router.get('/:id', (req,res) => {
	res.send('get one user by id')
})

router.post('/', (req,res) => {
	res.send('create one user')
})

router.put('/:id/', (req,res) => {
	res.send('update one user by id')
})

router.delete('/:id/', (req,res) => {
	res.send('delete one user by id')
})

module.exports = router;
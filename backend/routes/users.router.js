const express = require('express');
const { User } = require('../models')

const router = express.Router();

router.get('/', (req, res) => {
  User.findAll().then(data => res.json(data))
});

router.post('/', (req, res) => {
  console.log(req.body)
  User.create(req.body).then(data => res.json(data))
});

module.exports = router;
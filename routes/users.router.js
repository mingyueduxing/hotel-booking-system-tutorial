const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("get all users api response");
});

module.exports = router;
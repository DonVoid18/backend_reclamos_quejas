const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => res.send("route post"));

module.exports = router;

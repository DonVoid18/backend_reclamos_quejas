const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  res.send("route login");
  console.log(req.body);
});

module.exports = router;

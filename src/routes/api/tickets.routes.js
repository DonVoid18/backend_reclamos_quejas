const expres = require("express");
const router = expres.Router();

router.get("/tickets", (req, res) => {
  res.send("Mostrando los reclamos y quejas...");
});

module.exports = router;

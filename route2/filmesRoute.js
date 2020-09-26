const express = require("express");
const router = express.Router();
const controller2 = require("../controller2/filmesController");

router.get("/", controller2.getAll);
router.get("/filmes", controller2.getAll);

module.exports = router;
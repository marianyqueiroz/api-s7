const express = require("express");
const router = express.Router();
const controller = require("../controller/bandasController");

router.get("/", controller.getAll);
router.get("/bandas", controller.getAll);

module.exports = router;

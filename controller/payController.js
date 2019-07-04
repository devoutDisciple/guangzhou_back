const express = require("express");
const router = express.Router();
const payService = require("../services/payService");

router.get("/order", (req, res) => {
	payService.payOrder(req, res);
});

module.exports = router;

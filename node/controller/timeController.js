const express = require("express");
const router = express.Router();
const timeService = require("../services/timeService");

// 获取限时抢购列表
router.get("/getTimeGoods", (req, res) => {
	timeService.getTimeGoods(req, res);
});
// 减少限时抢购列表数量  subTimeGoods
router.get("/subTimeGoods", (req, res) => {
	timeService.subTimeGoods(req, res);
});

module.exports = router;

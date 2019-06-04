const express = require("express");
const router = express.Router();
const freeService = require("../services/freeService");

// 获取所有免费霸王餐
router.get("/getFreeGoods", (req, res) => {
	freeService.getFreeGoods(req, res);
});
// 免费霸王餐的数量减少一份
router.get("/subFreeGoods", (req, res) => {
	freeService.subFreeGoods(req, res);
});


module.exports = router;

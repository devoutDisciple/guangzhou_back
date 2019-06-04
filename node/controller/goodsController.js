const express = require("express");
const router = express.Router();
const goodsService = require("../services/goodsService");

// 根据商店id获取商品
router.get("/getByShopId", (req, res) => {
	goodsService.getByShopId(req, res);
});
// 指定id的商品增加销量
router.post("/addSales", (req, res) => {
	goodsService.getByShopId(req, res);
});


module.exports = router;

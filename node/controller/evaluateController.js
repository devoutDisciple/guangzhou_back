const express = require("express");
const router = express.Router();
const evaluateService = require("../services/evaluateService");
const orderService = require("../services/orderService");

// 新增评价
router.post("/addEvaluate", async (req, res) => {
	let result = await evaluateService.addEvaluate(req, res);
	if(result == "success") {
		await orderService.updateStatus(req, res, {
			status: 7,
			orderid: req.body.orderid
		});
	}
});
// 根据商店id获取评价
router.get("/getEvaluateByShopid", (req, res) => {
	evaluateService.getEvaluateByShopid(req, res);
});

module.exports = router;

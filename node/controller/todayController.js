const express = require("express");
const router = express.Router();
const todayService = require("../services/todayService");

// 获得今日推荐
router.get("/getAll", async (req, res) => {
	todayService.getAll(req, res);
});


module.exports = router;

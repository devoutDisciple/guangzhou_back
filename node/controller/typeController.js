const express = require("express");
const router = express.Router();
const typeService = require("../services/typeService");

// 获取所有分类
router.get("/all", (req, res) => {
	typeService.getAll(req, res);
});


module.exports = router;

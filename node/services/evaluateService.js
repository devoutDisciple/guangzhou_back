const resultMessage = require("../util/resultMessage");
const sequelize = require("../dataSource/MysqlPoolClass");
const evaluate = require("../models/evaluate");
const evaluateModel = evaluate(sequelize);

module.exports = {
	// 增加评价
	addEvaluate: async (req, res) => {
		let body = req.body;
		try {
			// 增加评价
			await evaluateModel.create(body);
			// 更改订单状态
			return "success";
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
	// 根据商店id获取评价
	getEvaluateByShopid: async (req, res) => {
		let shopid = req.query.shopid;
		try {
			// 增加评价
			let evaluates = await evaluateModel.findAll({
				where: {
					shopid: shopid
				},
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["create_time", "DESC"],
				]
			});
			let result = [];
			evaluates.map(item => {
				result.push(item.dataValues);
			});
			res.send(resultMessage.success(result));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},

};

const resultMessage = require("../util/resultMessage");
const sequelize = require("../dataSource/MysqlPoolClass");
const order = require("../models/order");
const orderModel = order(sequelize);
let ObjectUtil = require("../util/ObjectUtil");

module.exports = {
	// 增加订单
	addOrder: async (req, res) => {
		let body = req.body;
		let params = ObjectUtil.copy(body);
		delete params.id;
		delete params.goodIds;
		try {
			await orderModel.create(params);
			// res.send(resultMessage.success([]));
			return "success";
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
	// 获取订单
	getList: async (req, res) => {
		let openid = req.query.openid;
		try {
			let list = await orderModel.findAll({
				where: {
					openid: openid
				},
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["order_time", "DESC"],
				]
			});
			let result = [];
			list.map(item => {
				result.push(item.dataValues);
			});
			res.send(resultMessage.success(result));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
	// 更改订单的状态
	updateStatus: async (req, res, params) => {
		// let body = req.body;
		try {
			// await evaluateModel.create(body);
			await orderModel.update({status: params.status}, {
				where: {
					id: params.orderid
				}
			});
			res.send(resultMessage.success([]));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
};

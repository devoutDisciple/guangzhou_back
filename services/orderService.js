const resultMessage = require("../util/resultMessage");
const sequelize = require("../dataSource/MysqlPoolClass");
const order = require("../models/order");
const orderModel = order(sequelize);

module.exports = {
	// 增加订单
	addOrder: async (req, res) => {
		try {
			let body = req.body;
			let orderList = JSON.parse(body.orderList);
			console.log(orderList.length);
			await orderList.map(async (item) => {
				await orderModel.create({
					openid: body.openid,
					shop_detail: JSON.stringify(item.shopDetail),
					order_list: JSON.stringify(item.goods),
					desc: item.comment,
					total_price: item.totalPrice,
					order_time: (new Date()).getTime()
				});
			});
			return res.send(resultMessage.success([]));
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

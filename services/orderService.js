const resultMessage = require("../util/resultMessage");
const sequelize = require("../dataSource/MysqlPoolClass");
const order = require("../models/order");
const orderModel = order(sequelize);
const moment = require("moment");
const shop = require("../models/shop");
const ShopModel = shop(sequelize);
orderModel.belongsTo(ShopModel, { foreignKey: "shopid", targetKey: "id", as: "shopDetail",});

module.exports = {
	// 增加订单
	addOrder: async (req, res) => {
		try {
			let body = req.body;
			body.order_time = moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");
			await orderModel.create({
				openid: body.openid,
				shopid: body.shopid,
				order_list: body.order_list,
				desc: body.desc,
				total_price: body.totalPrice,
				order_time:	body.order_time
			});
			return res.send(resultMessage.success("success"));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
	// 获取订单
	getListByOpenid: async (req, res) => {
		let openid = req.query.openid;
		try {
			let list = await orderModel.findAll({
				where: {
					openid: openid
				},
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["order_time", "DESC"],
				],
				include: [{
					model: ShopModel,
					as: "shopDetail",
				}],
			});
			let result = [];
			list.map(item => {
				result.push({
					id: item.id,
					desc: item.desc,
					order_list: JSON.parse(item.order_list) || [],
					discount_price: item.discount_price,
					order_time: moment(item.order_time).format("YYYY-MM-DD HH:mm:ss"),
					shopid: item.shopid,
					shopName: item.shopDetail.name,
					status: item.status,
					total_price: item.total_price,
				});
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

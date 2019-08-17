const resultMessage = require("../util/resultMessage");
const sequelize = require("../dataSource/MysqlPoolClass");
const order = require("../models/order");
const orderModel = order(sequelize);
const shop = require("../models/shop");
const ShopModel = shop(sequelize);
const moment = require("moment");
orderModel.belongsTo(ShopModel, { foreignKey: "shopid", targetKey: "id", as: "shopDetail",});
const goods = require("../models/goods");
const goodsModel = goods(sequelize);

module.exports = {
	// 增加订单
	addOrder: async (req, res) => {
		try {
			let data = req.body.data;
			// body.order_time = moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");
			// let data = body.data;
			data.map(item => {
				item.order_time = moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");
				item.openid = req.body.openid;
				let orderList = item.oder_list;
				orderList = JSON.parse(item.order_list) || [];
				orderList.map(async (order )=> {
					await goodsModel.increment(["sales"], {
						by: order.num,
						where: {
							id: order.goodsid
						}
					});
					await ShopModel.increment(["sales"], {
						by: 1,
						where: {
							id: item.shopid
						}
					});
				});
			});
			await orderModel.bulkCreate(data);
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
					order_time: item.order_time,
					shopid: item.shopid,
					shopName: item.shopDetail.name,
					status: item.status,
					total_price: item.total_price,
					package_cost: item.package_cost
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

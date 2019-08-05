const resultMessage = require("../util/resultMessage");
const sequelize = require("../dataSource/MysqlPoolClass");
const goods = require("../models/goods");
const GoodsModel = goods(sequelize);
const shop = require("../models/shop");
const ShopModel = shop(sequelize);
GoodsModel.belongsTo(ShopModel, { foreignKey: "shopid", targetKey: "id", as: "shopDetail",});

module.exports = {

	// 获取同一家商店的所有食物
	getByShopId: async (req, res) => {
		let id = req.query.id;
		try {
			let goods = await GoodsModel.findAll({
				where: {
					shopid: id
				},
				include: [{
					model: ShopModel,
					as: "shopDetail",
				}],
			});
			let result = [];
			goods.map(item => {
				item.start_time = item.shopDetail.start_time;
				item.end_time = item.shopDetail.end_time;
				item.shopStatus = item.shopDetail.status;
				item.shopDetail = {};
				result.push(item);
			});
			res.send(resultMessage.success(result));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},

	// 获取今日推荐
	getToday: async (req, res) => {
		let position = req.query.position;
		try {
			let goods = await GoodsModel.findAll({
				where: {
					position: position,
					today: 1,
					show: 1
				},
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["sort", "DESC"],
				],
				include: [{
					model: ShopModel,
					as: "shopDetail",
				}],
			});
			let result = [];
			goods.map(item => {
				item.start_time = item.shopDetail.start_time;
				item.end_time = item.shopDetail.end_time;
				item.shopStatus = item.shopDetail.status;
				delete item.shopDetail;
				result.push(item);
			});
			res.send(resultMessage.success(result));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},

	// 根据id获取商品详情
	getById: async (req, res) => {
		let id = req.query.id;
		try {
			let goods = await GoodsModel.findOne({
				where: {
					id: id
				}
			});
			res.send(resultMessage.success(goods));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},

	//  获取同个校园的全部商品
	getByCampus: async (req, res) => {
		try {
			let goods = await GoodsModel.findAll({
				where: {
					position: req.query.position,
					show: 1
				},
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["sort", "DESC"],
				],
				include: [{
					model: ShopModel,
					as: "shopDetail",
				}],
			});
			let result = [];
			goods.map(item => {
				item.start_time = item.shopDetail.start_time;
				item.end_time = item.shopDetail.end_time;
				item.shopStatus = item.shopDetail.status;
				delete item.shopDetail;
				result.push(item);
			});
			res.send(resultMessage.success(result));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},

	// 根据商品id获取商品
	getByGoodsId: async (req, res) => {
		let id = req.query.id;
		try {
			let goods = await GoodsModel.findOne({
				where: {
					id: id
				}
			});
			res.send(resultMessage.success(goods));
		} catch (error) {
			console.log(error);
			return {};
		}
	},

	// 增加不同商品的销量
	addSales: async (req, res) => {
		let body = req.body;
		let goodIds = body.goodIds;
		try {
			goodIds.map(async (item) => {
				await GoodsModel.increment(["sales"], {
					by: item.num,
					where: {
						id: item.id
					}
				});
			});
			return "success";
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	}
};

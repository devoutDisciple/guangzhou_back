const resultMessage = require("../util/resultMessage");
const sequelize = require("../dataSource/MysqlPoolClass");
const car = require("../models/car");
const carModel = car(sequelize);
const goods = require("../models/goods");
const GoodsModel = goods(sequelize);
carModel.belongsTo(GoodsModel, { foreignKey: "goods_id", targetKey: "id", as: "goodsDetail",});
const shop = require("../models/shop");
const ShopModel = shop(sequelize);
carModel.belongsTo(ShopModel, { foreignKey: "shop_id", targetKey: "id", as: "shopDetail",});

module.exports = {
	// 添加购物车
	addCarGoods: async (req, res) => {
		let body = req.body;
		try {
			let originCarItem = await carModel.findOne({
				where: {
					openid: body.openid,
					goods_id: body.goods_id,
				},
			});
			console.log(originCarItem);
			if(originCarItem) {
				return res.send(resultMessage.success("have one"));
			}
			await carModel.create(body);
			res.send(resultMessage.success([]));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
	// 根据openid获取购物车信息
	getByOpenid: async (req, res) => {
		let openid = req.query.openid;
		try {
			let car = await carModel.findAll({
				where: {
					openid: openid
				},
				include: [{
					model: GoodsModel,
					as: "goodsDetail",
				}, {
					model: ShopModel,
					as: "shopDetail",
				}],
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["create_time", "DESC"],
				]
			});
			let result = [];
			car.map(item => {
				result.push({
					id: item.id,
					goodsid: item.goodsDetail.goodsid,
					goodsName: item.goodsDetail.name,
					shopid: item.shop_id,
					shopName: item.shopDetail.name,
					num: item.num,
					price: item.goodsDetail.price,
					package_cost: item.goodsDetail.package_cost,
					url: item.goodsDetail.url,
					send_price: item.shopDetail.send_price

				});
			});
			res.send(resultMessage.success(result));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
	// 修改购物车商品的数量
	modifyNum: async (req, res) => {
		let id = req.body.id, num = req.body.num;
		console.log(id);
		console.log(num);
		try {
			await carModel.increment(["num"], {
				by: num,
				where: {
					id: id
				}
			});
			res.send(resultMessage.success([]));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},

};

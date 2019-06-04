const resultMessage = require("../util/resultMessage");
const sequelize = require("../dataSource/MysqlPoolClass");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const time = require("../models/time");
const timeModel = time(sequelize);
const shop = require("../models/shop");
const shopModel = shop(sequelize);
const goods = require("../models/goods");
const goodsModel = goods(sequelize);

timeModel.belongsTo(shopModel, { foreignKey: "shop_id", targetKey: "id", as: "shopDetail",});
timeModel.belongsTo(goodsModel, { foreignKey: "goods_id", targetKey: "id", as: "goodsDetail",});

module.exports = {
	// 获取限时抢购商品列表
	getTimeGoods: async (req, res) => {
		try {
			let freeGoods = await timeModel.findAll({
				where: {
					is_delete: {
						[Op.not]: ["2"]
					},
					campus: req.query.position
				},
				include: [{
					model: shopModel,
					as: "shopDetail",
				}, {
					model: goodsModel,
					as: "goodsDetail",
				}],
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["sort", "ASC"],
				]
			});
			let result = [];
			freeGoods.map(async (item) =>  {
				result.push(item.dataValues);
			});
			res.send(resultMessage.success(result));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
	// 减少一份免费霸王餐
	subTimeGoods: async (req, res) => {
		try {
			let id = req.query.id;
			try {
				await timeModel.decrement(["total"], {
					by: 1,
					where: {
						id: id
					}
				});
				return res.send(resultMessage.success([]));
			} catch (error) {
				console.log(error);
				return res.send(resultMessage.error([]));
			}
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
};

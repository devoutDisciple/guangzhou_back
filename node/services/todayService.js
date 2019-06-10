const resultMessage = require("../util/resultMessage");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const sequelize = require("../dataSource/MysqlPoolClass");
const today = require("../models/today");
const TodayModel = today(sequelize);
const goods = require("../models/goods");
const GoodsModel = goods(sequelize);
TodayModel.belongsTo(GoodsModel, { foreignKey: "goods_id", targetKey: "id", as: "goodsDetail",});

module.exports = {
	getAll: async (req, res) => {
		try {
			let today = await TodayModel.findAll({
				where: {
					is_delete: {
						[Op.not]: ["2"]
					},
					campus: req.query.position
				},
				include: [{
					model: GoodsModel,
					as: "goodsDetail",
				}],
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["sort", "DESC"],
				]
			});
			let result = [];
			today.map(item => {
				result.push(item.dataValues);
			});
			res.send(resultMessage.success(result));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
};

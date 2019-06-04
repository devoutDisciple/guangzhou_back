const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("free", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		goods_id: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		shop_id: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		campus: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		sort: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		},
		total: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		tableName: "free",
		timestamps: false
	});
};

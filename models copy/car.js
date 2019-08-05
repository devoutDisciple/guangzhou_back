const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("car", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		openid: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		shop_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false
		},
		goods_id: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		num: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		},
		create_time: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			defaultValue: "1"
		}
	}, {
		tableName: "car",
		timestamps: false
	});
};

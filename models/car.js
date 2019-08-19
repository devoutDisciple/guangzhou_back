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
		campus: {
			type: Sequelize.STRING(45),
			allowNull: false,
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
		specification: {
			type: Sequelize.STRING(8000),
			allowNull: false,
			defaultValue: "{}"
		},
		price: {
			type: Sequelize.STRING(45),
			allowNull: false,
			defaultValue: "0"
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

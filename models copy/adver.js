const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("adver", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		url: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		shop_id: {
			type: Sequelize.INTEGER(255),
			allowNull: true
		},
		goods_id: {
			type: Sequelize.INTEGER(255),
			allowNull: true
		},
		status: {
			type: Sequelize.INTEGER(255),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		tableName: "adver",
		timestamps: false
	});
};

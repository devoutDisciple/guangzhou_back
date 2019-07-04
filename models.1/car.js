const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("car", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			primaryKey: true
		},
		openid: {
			type: Sequelize.STRING(255),
			allowNull: true
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
			allowNull: true
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: "car",
		timestamps: false
	});
};

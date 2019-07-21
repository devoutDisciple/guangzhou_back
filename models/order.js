const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("order", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			primaryKey: true
		},
		openid: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		order_list: {
			type: Sequelize.STRING(10000),
			allowNull: true
		},
		desc: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		total_price: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		discount_price: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		order_time: {
			type: Sequelize.BIGINT,
			allowNull: true
		},
		status: {
			type: Sequelize.STRING(45),
			allowNull: false,
			defaultValue: "5",
			primaryKey: true
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		tableName: "order",
		timestamps: false
	});
};

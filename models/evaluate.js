const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("evaluate", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			primaryKey: true
		},
		goods_id: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		orderid: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		openid: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		username: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		avatarUrl: {
			type: Sequelize.STRING(800),
			allowNull: true
		},
		desc: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		shop_grade: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		sender_grade: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		create_time: {
			type: Sequelize.BIGINT,
			allowNull: true
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			defaultValue: "1"
		}
	}, {
		tableName: "evaluate",
		timestamps: false
	});
};

const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("evaluate", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			primaryKey: true
		},
		shopid: {
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
		avatarUrl: {
			type: Sequelize.STRING(800),
			allowNull: true
		},
		username: {
			type: Sequelize.STRING(45),
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
			type: Sequelize.STRING(45),
			allowNull: true
		},
		is_delete: {
			type: Sequelize.Sequelize.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: "evaluate",
		timestamps: false
	});
};

const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("bill", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		code: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		shop_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false
		},
		type: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			defaultValue: "1"
		},
		account: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		money: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		status: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		},
		create_time: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: "CURRENT_TIMESTAMP(6)"
		},
		modify_time: {
			type: Sequelize.DATE,
			allowNull: true,
			timestamps: false
		}
	}, {
		tableName: "bill",
		timestamps: false
	});
};

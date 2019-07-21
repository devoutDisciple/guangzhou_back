const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("account", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			primaryKey: true
		},
		username: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		password: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		shopid: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		role: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "2"
		},
		is_delete: {
			type: Sequelize.STRING(255),
			allowNull: false,
			defaultValue: "1"
		}
	}, {
		tableName: "account",
		timestamps: false
	});
};

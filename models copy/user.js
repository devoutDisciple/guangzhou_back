const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("user", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			primaryKey: true
		},
		openid: {
			type: Sequelize.STRING(255),
			allowNull: true,
			unique: true
		},
		name: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		avatarUrl: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		phone: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		username: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		address: {
			type: Sequelize.STRING(10000),
			allowNull: true
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		tableName: "user",
		timestamps: false
	});
};

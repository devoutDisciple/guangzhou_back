const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("shop", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		url: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		typeid: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		},
		address: {
			type: Sequelize.STRING(500),
			allowNull: true
		},
		campus: {
			type: Sequelize.STRING(45),
			allowNull: true,
			defaultValue: "1"
		},
		sales: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		desc: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		start_price: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		send_price: {
			type: Sequelize.STRING(45),
			allowNull: true,
			defaultValue: "0"
		},
		special: {
			type: Sequelize.STRING(800),
			allowNull: true
		},
		package_cost: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		start_time: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		end_time: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		username: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		password: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		sort: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		},
		invite: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: "shop",
		timestamps: false
	});
};

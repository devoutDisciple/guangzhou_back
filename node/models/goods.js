const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("goods", {
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
		desc: {
			type: Sequelize.STRING(8000),
			allowNull: true
		},
		sales: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		price: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		discount: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		shopid: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		type: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		package_cost: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		specification: {
			type: Sequelize.STRING(800),
			allowNull: true
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		tableName: "goods",
		timestamps: false
	});
};

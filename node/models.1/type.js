const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("type", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING(45),
			allowNull: true,
			defaultValue: "美食"
		},
		url: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		campus: {
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
		}
	}, {
		tableName: "type",
		timestamps: false
	});
};

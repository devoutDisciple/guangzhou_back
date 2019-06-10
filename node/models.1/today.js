const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("today", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			primaryKey: true
		},
		goods_id: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		campus: {
			type: Sequelize.STRING(255),
			allowNull: true,
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
		tableName: "today",
		timestamps: false
	});
};

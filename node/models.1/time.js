const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("time", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		goods_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false
		},
		shop_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false
		},
		campus: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		total: {
			type: Sequelize.INTEGER(11),
			allowNull: false
		},
		sort: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		start_time: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		end_time: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		tableName: "time",
		timestamps: false
	});
};

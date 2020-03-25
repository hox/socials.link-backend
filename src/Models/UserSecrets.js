const Sequelize = require("../../main.js").Sequelize;

module.exports = {
  accountId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  integrations: {
    type: Sequelize.JSON,
    allowNull: true
  },
  sessionToken: {
    type: Sequelize.STRING,
    allowNull: true
  }
};

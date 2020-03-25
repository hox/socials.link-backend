const Sequelize = require("../../main.js").Sequelize;

module.exports = {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  displayname: {
    type: Sequelize.STRING,
    allowNull: true
  },
  aliases: {
    type: Sequelize.JSON,
    allowNull: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true
  },
  avatarUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://fakeimg.pl/512/222",
    allowNull: false
  },
  tags: {
    type: Sequelize.JSON,
    allowNull: true
  },
  integrations: {
    type: Sequelize.JSON,
    allowNull: true
  }
};

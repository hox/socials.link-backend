require("dotenv").config();
const Sequelize = require("sequelize");
const body_parser = require("body-parser");
const express = require("express");
const fs = require("fs");

// * * * * * //

const api = express();
api.disable("x-powered-by");
api.use(body_parser.json());
api.listen(process.env.API_PORT, () => {
  console.log(`[API] Online at :${process.env.API_PORT}`);
});

// * * * * * //

const models = {};

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    logging: false
  }
);
refreshTables();

// * * * * * //

fs.readdir("src/Routes", (err, types) => {
  if (err) throw err;
  types.forEach(type => {
    fs.readdir(`src/Routes/${type}`, (err, routes) => {
      if (err) throw err;
      routes.forEach(route => {
        let routeEx = require(`./src/Routes/${type}/${route}`);
        api[type](`/${route.split(".")[0]}`, (req, res) => {
          routeEx(req, res);
          console.log("GET /" + route.split(".")[0]);
        });
      });
    });
  });
});

// * * * * * //

function refreshTables() {
  fs.readdir("src/Models", (err, modelfiles) => {
    if (err) throw err;
    modelfiles.forEach(model => {
      models[model.split(".")[0]] = db.define(
        model.split(".")[0],
        require(`./src/Models/${model}`)
      );
      models[model.split(".")[0]].sync({ force: true });
      console.log(model.split(".")[0]);
    });
  });
}

// * * * * * //

module.exports = {
  fs: fs,
  api: api,
  db: db,
  models: models,
  Sequelize: Sequelize
};

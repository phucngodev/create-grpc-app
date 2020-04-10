const knex = require("knex");
const { env } = require("../utils");
const dbConfig = require("../knexfile.js");
const APP_ENV = env("NODE_ENV", "development");

let DB = null;

try {
  DB = knex(dbConfig[APP_ENV]);
} catch (err) {
  console.error("Could not connect database ", err);
  process.exit(1);
}

module.exports = {
  DB,
};

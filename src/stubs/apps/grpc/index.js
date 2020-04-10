const fs = require("fs");
const path = require("path");

const modulePath = path.resolve(__dirname, "../modules");
const modules = fs
  .readdirSync(modulePath)
  .map(folder => `${path.resolve(modulePath, folder, folder)}.grpc.js`)
  .filter(file => fs.existsSync(file))
  .map(file => require(file));

module.exports = modules;

const hbs = require("handlebars");

hbs.registerHelper("capitalize", function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
});

hbs.registerHelper("isMysql", function (db) {
  return db == "mysql" ? true : false;
});

hbs.registerHelper("isPg", function (db) {
  return db == "postgresql" ? true : false;
});

module.exports = {
  hbs,
};

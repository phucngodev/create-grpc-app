const {{name}}Service = require("./{{name}}.service.js");
const { buildResponse } = require("../../utils");

function sayHello(call, callback) {
  const msg = {{name}}Service.sayHello(call.request.name);
  const resp = buildResponse(msg);
  callback(null, resp);
}

module.exports = {
  sayHello,
};

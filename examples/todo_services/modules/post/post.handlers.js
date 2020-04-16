const postService = require("./post.service.js");
const { buildResponse } = require("../../utils");

function sayHello(call, callback) {
  const msg = postService.sayHello(call.request.name);
  const resp = buildResponse(msg);
  callback(null, resp);
}

module.exports = {
  sayHello,
};

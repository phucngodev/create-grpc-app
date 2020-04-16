const todoService = require("./todo.service.js");
const { buildResponse } = require("../../utils");

async function getTodos(call, callback) {
  try {
    const todos = await todoService.getTodos();
    const resp = buildResponse(todos);

    callback(null, resp);
  } catch (err) {
    console.error(err);
    const resp = buildResponse(null, false);
    callback(
      {
        code: 404,
        message: "Not Found",
      },
      resp,
    );
  }
}

module.exports = {
  getTodos,
};

const grpc = require("grpc");
const { getServicePackage } = require("../../utils");

const todoHandlers = require("./todo.handlers.js");
const todoPackage = getServicePackage("todo");

module.exports = [todoPackage.todo.TodoService.service, todoHandlers];

const grpc = require("grpc");
const { getServicePackage } = require("../../utils");

const {{name}}Handlers = require("./{{name}}.handlers.js");
const {{name}}Package = getServicePackage("{{name}}");

module.exports = [{{name}}Package.{{name}}.{{capitalize name}}Service.service, {{name}}Handlers];

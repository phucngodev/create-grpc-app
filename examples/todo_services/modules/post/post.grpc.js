const grpc = require("grpc");
const { getServicePackage } = require("../../utils");

const postHandlers = require("./post.handlers.js");
const postPackage = getServicePackage("post");

module.exports = [postPackage.post.PostService.service, postHandlers];

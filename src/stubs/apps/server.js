const grpc = require("grpc");
const { loadEnv } = require('./utils');
loadEnv();

const services = require("./grpc");

const server = new grpc.Server();
services.forEach(s => server.addService(...s));

const URL = `${env("SERVER_HOST", "localhost")}:${env("SERVER_PORT", 50051)}`;
server.bind(URL, grpc.ServerCredentials.createInsecure());

process.on("unhandledRejection", error => {
  logger.error("unhandledRejection", error.stack);
});

console.log(`servering at ${URL}`);
server.start();

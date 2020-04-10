const path = require("path");
const dotenv = require('dotenv');
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

/**
 * Returns grpc package definition by module name
 * @param string moduleName, ex: user, todo
 * @return grpc.PackageDefinion
 */
function getServicePackage(moduleName) {
  const TODO_PROTO_FILE = `${path.resolve(
    __dirname,
    "../modules/",
    moduleName,
    moduleName,
  )}.proto`;

  const todoProtoDef = protoLoader.loadSync(TODO_PROTO_FILE);
  return grpc.loadPackageDefinition(todoProtoDef);
}

function buildResponse(data, success = true) {
  return {
    status: success ? "success" : "false",
    timestampt: new Date().toISOString(),
    data,
  };
}

function loadEnv() {
  try {
    const configPath = path.resolve(__dirname, '../.env');
    dotenv.config({ path: configPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

/**
 * Get environment by key
 */
function env(key, defaultValue = null) {
  return process.env[key] || defaultValue;
}

module.exports = {
  buildResponse,
  getServicePackage,
  env,
  loadEnv,
};

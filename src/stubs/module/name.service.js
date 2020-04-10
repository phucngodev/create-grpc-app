const {{name}}Repo = require("./{{name}}.repository.js");

function sayHello(name) {
  return `Hello ${name} from {{capitalize name}} service.`;
}

module.exports = {
  sayHello
};

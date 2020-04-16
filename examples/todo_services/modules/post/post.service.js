const postRepo = require("./post.repository.js");

function sayHello(name) {
  return `Hello ${name} from Post service.`;
}

module.exports = {
  sayHello
};

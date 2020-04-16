const todoRepo = require("./todo.repository.js");

async function getTodos() {
  try {
    const todos = await todoRepo.getTodos();
    return todos;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getTodos,
};

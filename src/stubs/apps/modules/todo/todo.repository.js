const axios = require("axios");

async function getTodos() {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return resp.data;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getTodos,
};

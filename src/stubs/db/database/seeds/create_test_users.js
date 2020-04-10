exports.seed = function (knex) {
  return knex("users").insert([
    { first_name: "John", last_name: "Doe" },
    { first_name: "David", last_name: "Smith" },
  ]);
};

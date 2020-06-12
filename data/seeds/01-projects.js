exports.seed = function (knex) {
  return knex("projects").insert([
    { name: "Clean Kitchen", description: "huh", completed: true },
    { name: "Paint Fence" },
  ]);
};

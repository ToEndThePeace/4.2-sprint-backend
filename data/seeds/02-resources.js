exports.seed = function (knex) {
  return knex("resources").insert([
    { name: "Broom", description: "a" },
    { name: "Lysol", description: "b" },
    { name: "Gloves", description: "c" },
    { name: "Paint", description: "d" },
    { name: "Paint Roller", description: "e" },
  ]);
};

exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      description: "Sweep floor.",
      notes: "No notes necessary.",
      completed: true,
      project_id: 1,
    },
    { description: "Wash dishes.", completed: true, project_id: 1 },
    { description: "...Profit???", completed: true, project_id: 1 },
    { description: "Paint fence.", project_id: 2 },
    { description: "....???", project_id: 2 },
    { description: "PROFIT??", project_id: 2 },
  ]);
};

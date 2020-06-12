const db = require("../data/config");

const get = () => {
  return db("projects");
};
const getById = (id) => {
  return db("projects AS P")
    .join("tasks AS T", "T.project_id", "P.id")
    .join("project_resources AS X", "X.project_id", "P.id")
    .join("resources AS R", "R.id", "X.resource_id")
    .where("P.id", id)
    .select(
      "P.id AS proj_id",
      "P.name AS proj_name",
      "P.description AS proj_desc",
      "P.completed AS proj_comp",
      "T.id AS task_id",
      "T.description AS task_desc",
      "T.notes AS task_notes",
      "T.completed AS task_comp",
      "R.id AS res_id",
      "R.name AS res_name",
      "R.description AS res_desc"
    )
    .orderBy("T.id", "R.id");
};
const insert = (newProject) => {
  return db("projects").insert(newProject);
};

module.exports = {
  get,
  getById,
  insert,
};

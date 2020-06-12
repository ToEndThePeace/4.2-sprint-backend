const db = require("../data/config");

const getProjTasks = (proj_id) => {
  return db("tasks AS T")
    .join("projects AS P", "P.id", "T.project_id")
    .select("T.id", "T.description", "T.notes", "T.completed", "T.project_id")
    .where("T.project_id", proj_id);
};
const addTask = (project_id, newTask) => {
  const taskData = { ...newTask, project_id };
  return db("tasks").insert(taskData);
};

module.exports = {
  getProjTasks,
  addTask,
};

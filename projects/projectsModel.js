const db = require("../data/config");

const get = () => {
  return db("projects");
};
const insert = (newProject) => {
  return db("projects").insert(newProject);
};

module.exports = {
  get,
  insert,
};

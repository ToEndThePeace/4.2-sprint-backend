const db = require("../data/config");

const get = () => {
  return db("resources");
};
const insert = (newResource) => {
  return db("resources").insert(newResource);
};

module.exports = {
  get,
  insert,
};

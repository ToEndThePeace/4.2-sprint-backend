const router = require("express").Router();

const tasksRouter = require("../tasks/tasksRouter");
router.use("/:id/tasks", tasksRouter);

const Projects = require("./projectsModel");

router.get("/", (req, res) => {
  Projects.get()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to retrieve projects" });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.getById(id)
    .then((proj) => {
      res.status(200).json(parseProject(proj));
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: "Project not found" });
    });
});
router.post("/", (req, res) => {
  const { body: newProject } = req;
  Projects.insert(newProject)
    .then(([id]) => {
      res.status(201).json({ id });
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not create project" });
    });
});

module.exports = router;

const parseProject = (proj) => {
  const {
    proj_id: id,
    proj_name: name,
    proj_desc: description,
    proj_comp: completed,
  } = proj[0];
  let tasks = [];
  let resources = [];
  proj.forEach((x) => {
    if (!tasks.length || tasks.every((task) => task.id !== x.task_id)) {
      tasks.push({
        id: x.task_id,
        description: x.task_desc,
        notes: x.task_notes,
        completed: x.task_comp ? true : false,
      });
    }
    if (!resources.length || resources.every((y) => y.id !== x.res_id)) {
      resources.push({
        id: x.res_id,
        name: x.res_name,
        description: x.res_desc,
      });
    }
  });
  return {
    id,
    name,
    description,
    completed: completed ? true : false,
    tasks,
    resources,
  };
};

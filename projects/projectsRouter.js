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

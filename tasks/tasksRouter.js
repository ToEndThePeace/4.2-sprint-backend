const router = require("express").Router({ mergeParams: true });

const Tasks = require("./tasksModel");

router.get("/", (req, res) => {
  const { id } = req.params;
  Tasks.getProjTasks(id)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve tasks" });
    });
});

router.post("/", (req, res) => {
  const { id } = req.params;
  const { body: newTask } = req;
  Tasks.addTask(id, newTask)
    .then(([id]) => {
      res.status(201).json({ id });
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to add new task" });
    });
});

module.exports = router;

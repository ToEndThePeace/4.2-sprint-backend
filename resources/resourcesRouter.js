const router = require("express").Router();

const Resources = require("./resourcesModel");

router.get("/", (req, res) => {
  Resources.get()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve resources" });
    });
});

router.post("/", (req, res) => {
  const { body: newResource } = req;
  Resources.insert(newResource)
    .then(([id]) => {
      res.status(201).json({ id });
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not create new resource" });
    });
});

module.exports = router;

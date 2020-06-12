const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

const projectsRouter = require("../projects/projectsRouter");
const resourcesRouter = require("../resources/resourcesRouter");

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server running!" });
});

module.exports = server;

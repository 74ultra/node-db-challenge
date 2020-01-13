const express = require('express');

const server = express();

server.use(express.json());

const projectsRouter = require('./projects/projects-router.js')

server.use('/projects', projectsRouter)

const port = 4000;

server.listen(port, console.log(`Server listening on port ${port}`));
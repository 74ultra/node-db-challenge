const express = require('express')

const Projects = require('./projects-model.js');

const router = express.Router({
    mergeParams: true
})

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            projects.forEach(item => {
                if(item.completed){
                    item.completed = true
                } else if(!item.completed){
                    item.completed = false
                }
            })
            
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'There was an error retrieving projects'})
        })
});

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'There was an error retrieving resources'})
        })
});

router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            tasks.forEach(item => {
                if(item.completed){
                    item.completed = true
                } else if (!item.completed){
                    item.completed = false
                }
            })
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'There was an error retrieving tasks'})
        })
});

router.post('/', (req, res) => {
    const projectData = req.body;
    Projects.addProject(projectData)
        .then(project => {
            console.log(project.id)
            res.status(201).json(project)
            
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `There was an error adding the project`})
        })
})

router.post('/resources', (req, res) => {
    const resourceData = req.body;
    Projects.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `There was an error adding the resource`})
        })
})

router.post('/tasks', (req, res) => {
    const taskData = req.body;
    Projects.addTask(taskData)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `There was an error adding the resource`})
        })
})

module.exports = router;
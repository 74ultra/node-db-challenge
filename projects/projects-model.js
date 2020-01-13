const db = require('../data/db.js');

function getProjects() {
    return db('projects')
}

function getResources() {
    return db('resources')
}

function getTasks() {
    return db('tasks AS t')
        .select(['t.*', 'p.name AS project_name', 'p.description AS project_description'])
        .join('projects AS p', 't.project_id', 'p.id')
}

async function addProject(newProject) {
    const addedId = await db('projects').insert(newProject)
    return db('projects').where('id', addedId[0]).first()
}

async function addResource(newResource) {
    const addedResource = await db('resources').insert(newResource)
    return db('resources').where('id', addedResource[0]).first()
}

async function addTask(newTask) {
    const addedTask = await db('tasks').insert(newTask)
    return db('tasks').where('id', addedTask[0]).first()
}

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
};
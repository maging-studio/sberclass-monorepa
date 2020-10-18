const fs = require('fs');
const path = require('path');

module.exports.addTasksGroup = fs.readFileSync(path.join(__dirname, 'addTasksGroup.gql'), 'utf8');
module.exports.addTopic = fs.readFileSync(path.join(__dirname, 'addTopic.gql'), 'utf8');
module.exports.create = fs.readFileSync(path.join(__dirname, 'create.gql'), 'utf8');
module.exports.update = fs.readFileSync(path.join(__dirname, 'update.gql'), 'utf8');
module.exports.updateTasksGroup = fs.readFileSync(path.join(__dirname, 'updateTasksGroup.gql'), 'utf8');

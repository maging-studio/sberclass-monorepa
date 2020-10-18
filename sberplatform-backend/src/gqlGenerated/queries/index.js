
const fs = require('fs');
const path = require('path');

module.exports.educationModule = fs.readFileSync(path.join(__dirname, 'educationModule.gql'), 'utf8');
module.exports.educationModules = fs.readFileSync(path.join(__dirname, 'educationModules.gql'), 'utf8');
module.exports.user = fs.readFileSync(path.join(__dirname, 'user.gql'), 'utf8');

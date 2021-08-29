// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const genMark = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projName',
    message: 'Project Name?',
  },
  {
    type: 'input',
    name: 'projDesc',
    message: 'Description?',
  },
  {
    type: 'input',
    name: 'projInst',
    message: 'Installation Instructions?',
  },
  {
    type: 'input',
    name: 'projUsag',
    message: 'Usage Information?',
  },
  {
    type: 'input',
    name: 'projGuides',
    message: 'Project Contribution Guidelines?',
  },
  {
    type: 'input',
    name: 'projTest',
    message: 'Project Testing Instructions?',
  },
  {
    type: 'list',
    name: 'projLicense',
    choices: ['None', 'GNU'],
    message: 'Choose your license?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

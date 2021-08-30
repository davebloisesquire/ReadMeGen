// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const util = require('util');
const gen = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projTitle',
    message: 'Project Name?',
  },
  {
    type: 'input',
    name: 'projDesc',
    message: 'Project Description?',
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
    choices: ['None', 'Apache 2.0', 'Boost SL 1.0', 'BSD 3', 'CC0', 'Eclipse', 'GNU', 'MIT'],
    message: 'Choose your license?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log("New ReadMe file generated!");
  })
}

// TODO: Create a function to initialize app
function init() {
  inq.prompt(questions)
  .then(responses => {
    const data = responses
    const markDown = gen(data);

    writeToFile("./README.md", markDown)
  })
}

// Function call to initialize app
init();

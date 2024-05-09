// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () =>
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Write a description about the project"
    },
    {
      type: "input",
      name: "installation",
      message: "Any installations required for this project?"
    },
    {
      type: "input",
      name: "usage",
      message: "What is the project going to be used for?"
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license is required?",
      choices: ["MIT", "The Unlicense", "Mozilla Public License 2.0"]
    },
    {
      type: "input",
      name: "contributing",
      message: "Who is contributing?"
    },
    {
      type: "input",
      name: "tests",
      message: "Are there any tests needed?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your github email?"
    },

  ]);


function writeToFile(filename, data) {


  fs.writeFile(filename, generateMarkdown(data), (error) =>
    error ? console.log(error) : console.log('It did it!')
  )
}

function init() {
  questions().then( (data) => {
    writeToFile("examplereadME.md", data)
  })
}

init();
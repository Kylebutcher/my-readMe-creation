// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
  {
    type: "input",
    message: "Please enter some fun information about yourself!",
    name: "information"
  },
  { type: "input",
    message: "How old are you?",
    name: "age"
  },
  {
    type: "input",
    message: "Where are you from?",
    name: "location"
  },
  {
    type: "input",
    message: "Enter your Github Link."
  }

])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  if(err) {
    return console.log(err);
  }
    console.log('readMe is ready to view')
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

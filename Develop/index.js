// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { transferableAbortSignal } = require('util');
const path = require('path');

// TODO: Create an array of questions for user input

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
    }

  ])

// TODO: Create a function to write README file

//unsure if i need this below at the moment.

// const readME = `
// #Title
// ## Description
// ## Table of contents
// ## Installation
// ## Usage
// ## license
// ## Contributing
// ## tests 
// ## Questions
// `

fs.writeFile('README.md', readME, (error) =>
  error ? console.error(error) : console.log('It did it!')
)
// function writeToFile("readMe.md", data) {
if (err) {
  return console.log(err);
}
console.log('readMe is ready to view')


fs.writeFile("README.md", writeToFile, function (err) {
  if (err) return console.log("something is wrong")
})

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

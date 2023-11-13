// Included packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generate = require("./utils/generateMarkdown");
const { title } = require("process");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
    
  },
  {
    type: "license",
    name: "license",
    message: "Which license will you use for your project?",
    choices: ["agpl", "apache", "mit", "no license"],
  },
  {
    type: "input",
    name: "description",
    message: "Please provide your project's description",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please insert the screeshot of the project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples pf the project usage.",
  },

  {
    type: "input",
    name: "installation",
    message: "Please provide steps required to install your project.",
  },


  {
    type: 'input',
    name: 'test',
    message: 'How can a user test your software?'
}
  {
    type: "input",
    name: "credits",
    message: "Please list the collaborators and their github profiles.",
  },

  {
    type: "input",
    name: "repo",
    message: "What is your repo link?"
},

  {
    type: "input",
    name: "username",
    message: "What is your github user name?"
},





];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions).then((readmeData) => {
    console.log("Creating Professional REadME.md File");
    writeToFile("./")
    return readmeData;
  });
};

// Function call to initialize app
init()
  .then((readmeData) => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
  })
  .then((pageMD) => {
    return writeToFile(pageMD);
  })
  .then((writeToFileResponse) => {
    console.log(writeToFileResponse.message);
  })
  .catch((err) => {
    console.log(err);
  });

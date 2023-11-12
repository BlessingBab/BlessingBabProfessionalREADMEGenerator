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
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your title!");
        return false;
      }
    },
  },
  {
    type: "list",
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
    name: "usage",
    message: "Please provide instructions and examples pf the project usage.",
  },
];

// TODO: Create a function to write README file
function writeToFile() {
  const writeToFile = (fileContent) => {
    return new Promise((resolve, reject) => {
      fs.writeFile("./dist/generated-README.md", fileContent, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve({
          ok: true,
          message: "Created file",
        });
      });
    });
  };
}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions).then((readmeData) => {
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
    return writeFile(pageMD);
  })
  .then((writeToFileResponse) => {
    console.log(writeToFileResponse.message);
  })
  .catch((err) => {
    console.log(err);
  });

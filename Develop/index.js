const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use for this project?',
        choices: ["MIT", "APACHE-2.0", "NONE"],
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Provide a short description explaining the what, why, and how of your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide a short procedure of installation',
    }
    {
        type: 'input',
        name: 'credits',
        message: 'Who gets credit for this?',
    }
]

function writeToFile(fileName, data) {
    const fs = require('fs');
    fs.writeFile(fileName, data, (err) => {
 
        // In case of a error throw err.
        if (err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Generating.....");
        writeToFile("./utils/README.md", generateMarkdown({ ...inquirerAnswers }));
    })
}

// Function call to initialize app
init();



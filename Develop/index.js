
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [];
var ans = prompt("1. What is your name?");
questions.push(ans);
ans = prompt("2. What is the name of the project?");
questions.push(ans);
ans = prompt("3. Name of your github repository?");
questions.push(ans);
ans = prompt("4. What is your email?");
questions.push(ans);

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



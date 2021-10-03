const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

var prompt = inquirer.createPromptModule();

// TODO: Create an array of questions for user input
const questions = [
   { type: 'input',name: 'title', message: "What is the title of the project ?"},
   { type: 'input',name: 'description', message: "Please enter a description of the project"},
   { type: 'input',name: 'instructions', message: "Please enter any installation instructions"},
   { type: 'input',name: 'usage', message: "Please enter any usage information"},
   { type: 'input',name: 'contribution', message: "Please enter the contribution guidelines"},
   { type: 'input',name: 'testing', message: "Please enter any testing instructions"},
   { type: 'input',name: 'git-username', message: "Please enter your github username"},
   { type: 'input',name: 'email-address', message: "Please enter your email address"}
];

prompt(questions)
.then((answers) => {
   console.log('running write to file')
   const markdown = generateMarkdown(answers);
   writeToFile('./test.md',markdown);
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if (err) {
            return console.log(err);
        }
    });
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
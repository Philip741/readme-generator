const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

var prompt = inquirer.createPromptModule();
const licLinks = generateMarkdown.licenseLinks;
const licenses = Object.keys(licLinks);

const licenseChoices = [
    "MIT",
    "BSD",
    "Apache",
    "GPL"
]

const questions = [
   { type: 'input',name: 'title', message: "What is the title of the project ?"},
   { type: 'input',name: 'description', message: "Please enter a description of the project"},
   { type: 'input',name: 'instructions', message: "Please enter any installation instructions"},
   { type: 'input',name: 'usage', message: "Please enter any usage information"},
   { type: 'input',name: 'contribution', message: "Please enter the contribution guidelines"},
   { type: 'input',name: 'testing', message: "Please enter any testing instructions"},
   { type: 'input',name: 'git_username', message: "Please enter your github username"},
   { type: 'input',name: 'email_address', message: "Please enter your email address"},
   { type: 'list', name: 'license', message: "Choose a license type for the project", choices: licenses}
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if (err) {
            return console.log(err);
        }
    });
}

function init() {
   prompt(questions)
   .then((answers) => {
       const markdown = generateMarkdown.generateMarkdown(answers);
       writeToFile('./test.md',markdown);
   })
}

// Function call to initialize app
init();
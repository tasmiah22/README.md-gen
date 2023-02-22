const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./README.md-gen/utils/generateMarkdown");

// question array

const questions = [
    {
        name: 'projectTitle',
        message: 'What is the name of your project?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Tell me about your app:',
        type: 'input'
    },
    {
        name: 'install',
        message:'Does your app require installation? If so, please provide step-by-step instructions:',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'What are the instuctions to use the app?',
        type: 'editor'
    },
    {
        name: 'license',
        message: 'What licence do you require?',
        type: 'list',
        choices: ['Apache-2.0', 'GPL-3.0', 'MIT', 'BSD-2-Clause "Simplified"', 'BSD-3-Clause "New" or "Revised"', 'Boost Software License-1.0', 'Creative Commons Zero-1.0 Universal', 'Eclipse-2.0', 'Affero GPL-3.0', 'GPL-2.0', 'Lesser GPL-2.1', 'Mozilla-2.0', 'The Unlicense']
    },
    {
        name: 'licenseColor',
        message: 'What colour would you like to add to your license badge:',
        type: 'list',
        choices: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 'blue', 'lightgrey', 'blueviolet']
    },
    {
        name: 'contribute',
        message: 'Please explain any guidelines for other devlopers if you are open to contributions on your project:',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'Are there any tests for your app? If so, please add them here:',
        type: 'input'
    },
    {
        name: 'githubID',
        message: 'Please enter your GitHub username:',
        type: 'input'
    },
    {
        name: 'githubURL',
        message: 'Please provide the URL to your GitHub profile:',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Please enter your email address:',
        type: 'input'
    }
];




    function writeFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
              return console.log(err);
            }
          
            console.log("Your README.md file has been generated.")
        });
    };

    function init() {
        console.log("------ README Generator! ------");
        inquirer.prompt(questions).then((answers) => {
            console.log({answers});
            const markdown = generateMarkdown(answers);
            console.log({markdown});
            writeFile(answers.projectTitle, markdown);
        })
    }
    
    
    init();
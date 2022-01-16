const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

const fs = require("fs")

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const readMe = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your project title?",
            name: 'title',
            default: 'Project Title',
            validate: (value)=> 
                { if(value) {
                    return true} else {
                        return 'This is required!'}}
        },
        {
            type: 'input',
            message: "Please provide a project description",
            name: 'description',
            default: 'Default description',
            validate: (value)=> 
                { if(value) {
                    return true} else {
                        return 'This is required!'}}
        },
        {
            type: 'input',
            message: "If applicable, how is this application installed?",
            name: 'install',
            default: 'Default installation method',
            validate: (value)=> 
            { if(value) {
                return true} else {
                    return 'This is required!'}}
        },
        {
            type: 'input',
            message: "Explain how this application is used",
            name: 'usage',
            default: 'Default application explanation',
            validate: (value)=> 
            { if(value) {
                return true} else {
                    return 'This is required!'}}
        },
        {
            type: 'input',
            message: "What testing was done",
            name: 'tests',
            default: 'No testing was performed',
            validate: (value)=> 
            { if(value) {
                return true} else {
                    return 'This is required!'}}
        },
        {
            type: 'list',
            message: "Select a license for this project",
            name: 'license',
            choices: [
                'Mozilla Public License 2.0',
                'GNU AGPLv3', 
                'GNU GPLv3', 
                'GNU LGPLv3', 
                'MIT License',
                'Apache License 2.0', 
                'The Unlicense'
            ]
        },
        {
            type: 'input',
            message: "Who gets credit for this application?",
            name: 'credits',
            default: 'Nigel Loch',
            validate: (value)=> 
                { if(value) {
                    return true} else {
                        return 'This is required!'}}
        },
        {
            type: 'input',
            message: "Questions",
            name: 'questions',
            default: 'What is the meaning of life?',
            validate: (value)=> 
                { if(value) {
                    return true} else {
                        return 'This is required!'}}
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Your ReadMe has been generated!')
      });
}

// TODO: Create a function to initialize app
readMe() 
    .then(createMarkdown => {
        return generateMarkdown(createMarkdown);
    })
    .then(markdown => {
        return writeToFile('./dist/readme.md', markdown)
    })
    .catch(err => {
        console.log(err);
    });





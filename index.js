const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

const fs = require("fs")

// begin user questions
const readMe = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'username',
            default: 'nigelloch',
            validate: (value)=> 
                { if(value) {
                    return true} else {
                        return 'This is required!'}}
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
            default: 'nigelloch@gmail.com',
            validate: (value)=> 
                { if(value) {
                    return true} else {
                        return 'This is required!'}}
        },
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
                'MPL_2.0',
                'GPL_v3', 
                'MIT',
                'Apache_2.0', 
                'Unlicense'
            ]
        },
        {
            type: 'input',
            message: "Provide individual contributors and resources",
            name: 'contributors',
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
            default: 'Please contact me here with any questions- ',
            validate: (value)=> 
                { if(value) {
                    return true} else {
                        return 'This is required!'}}
        }
    ])
};

// take the questions/answers and create a readme
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

// Initialize the application
readMe() 
    .then(createMarkdown => {
        return generateMarkdown(createMarkdown);
    })
    .then(markdown => {
        return writeToFile('./README.md', markdown)
    })
    .catch(err => {
        console.log(err);
    });





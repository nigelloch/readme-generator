const inquirer = require("inquirer");

console.log('Hello Node!');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message="What is your project title?",
            name: 'title',
            validate: (value)=> 
                { if(value) {
                    return true} else {
                        return 'This is required!'}}
        },
        {
            type: 'input',
            message="Please provide a project desctiption",
            name: 'description',
            validate: (value)=> 
                { if(value) {
                    return true} else {
                        return 'This is required!'}}
        },
        {
            type: 'input',
            message="How does this app work?",
            name: 'work',
            validate: (value)=> 
                { if(value) {
                    return true} else {
                        return 'This is required!'}}
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




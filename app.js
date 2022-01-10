console.log('Hello Node!');

const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt(
    [
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
        },
    ]

    ).then(({
        title,
        description,
        work
    }) =>{
    
    
    const template = `# ${title}
    
    `
    }
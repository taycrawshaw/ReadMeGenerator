const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { log } = require("console");



// array of questions for user
const questions = [
    {
        type: 'input', 
        message: 'What is the Project Title?',
        name: 'title',
            },
            {
        type: 'input', 
        message: 'What is the Project Description?',
        name: 'description',
                    },
            { 
        type: 'input', 
        message: 'Please enter the Instuctions for Installation',
        name: 'installation',
            },
            {
        type: 'input', 
        message: 'How do you use your application?',
        name: 'usage',
                    },
                    {
        type: 'input', 
        message: 'Please enter the guidelines for contributing towards the project',
        name: 'contribute',
                            },
            {
        type: 'input', 
        message: 'what are the instructions for testing?',
        name: 'test',
                            },
                          {
        type: 'input', 
        message: 'what is your GitHub username?',
        name: 'gitUser',
                            },
       {            
        type: 'input', 
        message: 'what is your email address?',
        name: 'email',
                            }
];
 
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
   

   
    inquirer.prompt(questions)
    .then((response) => {
        const newReadMe = generateMarkdown(response);
    
 fs.writeFile('README.md', newReadMe, (error) => error ? console.error(error) : console.log('Success!'));

  

   
    });



}










// function call to initialize program
init();

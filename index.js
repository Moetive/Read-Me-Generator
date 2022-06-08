// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [];
const licenses = ['none','Apache', 'BSD', 'Attribution','GNU','IBM','MIT','Mozilla','Perl']
promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'Enter the title of your Project',
        },
        {
          type: 'input', 
          name: 'Description',
          message: `Enter a brief explanation of this project`,
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please enter your list of instructions for installation of this project',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What is the usage of this project/application',
        },
        {
            type: 'input',
            name: 'Collaboration',
            message: 'List your collaboration guidlines',
        },
        {
            type:'input',
            name:'Test Instructions',
            message:'Please write tests for this project and include instructions how to run them',
        },
        {
            type:'input',
            name: 'GitHub Username',
            message:'Pleae enter your github username',
        },
        {
            type:'input',
            name: 'Email',
            message:'Please enter your Email Address',
        }
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select the license of this project, if applicable',
            choices: licenses,
        },
    ])
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
          console.log(err);
        } else {
          console.log("Your README has been generated")
        }
    })
};   

// TODO: Create a function to initialize app
const init = () => {
    console.clear();
    promptUser()
      .then((answers) => writeToFile(answers.licenses))
      .then(() => {
                    console.clear();
                    console.log(`Successfully wrote to file`);
                  })
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();

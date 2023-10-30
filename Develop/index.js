const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log('Thank you for using the Professional README generator for your project!')
console.log('Please answer the following questions to generate your  Professional README file.')


const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project title to get started!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description that summarizes and promotes your project in a few sentences.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project to continue!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the step(s) with details, required to install your project.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter the step(s) required to install your project to continue!');
                return false;
            }

        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide user instructions and examples for use your application.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions and examples for use to continue!');
                return false;
            }

        }
    },

    {
        type: 'input',
        name: 'features',
        message: 'Please list the all of major feature(s) of your project.',
        validate: featuresInput => {
            if (featuresInput) {
                return true;
            } else {
                console.log('Please list the all or major features of your project to continue!');
                return false;
            }

        }
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Please list the collaborators, if any, with links to their GitHub profiles.',
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                console.log('Please list the collaborators, if any, with links to their GitHub profiles to continue!');
                return false;
            }

        }
    },

    {
        type: 'input',
        name: 'resources',
        message: 'Please list any third-party assets that require attribution, if any, with links to their primary locations.',
        validate: resourcesInput => {
            if (resourcesInput) {
                return true;
            } else {
                console.log('Please list any third-party assets that require attribution, if any, with links to their primary locations to continue!');
                return false;
            }

        }
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the license(s) for your project.',
        choices: ['Apache', 'GNU', 'MIT', 'Mozilla', 'MPL_2.0', 'Open', 'None of the above'],
        validate: licenseInput => {
            if (!licenseInput) {
                console.log('Please select the license(s) for your project to continue!');
                return false;
            }
            if (licenseInput.includes('None of the above')) {
                return false;}
            return true;
        }

    }
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Your Professional README file has been created!')
    });
};


function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile('README.md', generateMarkdown(userInput));
        });
}

// Function call to initialize app
init();

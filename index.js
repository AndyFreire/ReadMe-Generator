function init() {

    // Initialize inquirer
    const inquirer = require('inquirer');

    // Create an array of questions for inquirer
    const questions = [
        {
            type: 'input',
            name: 'userName',
            message: "What's your Github Username?",
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "What's the email you want to post on this readme?",
        },
        {
            type: 'input',
            name: 'title',
            message: "What's your repository named?",
            default: function () { return 'Project Title'; },
        },
        {
            type: 'editor',
            name: 'description',
            message: "Enter a description for your project. When you are done, hit 'Escape', then ':x' to exit."
        },
        {
            type: 'confirm',
            name: 'tableOfContents',
            message: "Would you like to add a Table of Contents to your ReadMe?"
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the steps required to install your project?"
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples for use."
        },
        {
            type: 'input',
            name: 'credits',
            message: "List your collaborators, if any, with links to their GitHub profiles."
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Enter any guidelines for contributing to this repo."
        },
        {
            type: 'input',
            name: 'tests',
            message: "Explain how to run the automated tests for this system."
        }

    ];

    // Ask the questions in the CL
    inquirer.prompt(questions)
        .then(answers => {
            // Use user feedback for... whatever!!

            let fileName = `${answers.title}.md`;

            const generateMarkdown = require('./utils/generateMarkdown.js');

            // Generate markdown from the users answers
            const markdown = generateMarkdown(answers);

            writeToFile(fileName, markdown);
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });

}

function writeToFile(fileName, data) {
    const fs = require('fs');

    fs.writeFile(fileName, data, (err) => {
        // If there is any error in writing to the file, return
        if (err) {
            console.error(err)
            return
        }

        console.log('Wrote README file successfully')
    })

}

init();

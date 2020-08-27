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
        name: 'title',
        message: "What's the title of this projet?",
        default: function () { return 'Project Title';},
        }
    ];
    
    // Ask the questions in the CL
    inquirer.prompt(questions)
    .then(answers => {
        // Use user feedback for... whatever!!

        let fileName = `${answers.title}.md`;

        // Store the users answers in an object
        let userInputs = {
            userName: answers.userName,
            title: answers.title
        }

        const generateMarkdown = require('./utils/generateMarkdown.js');

        // Generate markdown from the users answers
        const markdown = generateMarkdown(userInputs);

        writeToFile(fileName, markdown);
    })
    .catch(error => {
        if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else when wrong
        }
    });

}

function writeToFile(fileName, data) {
    const fs = require('fs');

    fs.writeFile(fileName, data , (err) => {
        // If there is any error in writing to the file, return
        if (err) {
            console.error(err)
            return
        }
    
        console.log('Wrote README file successfully')
    })

}

init();

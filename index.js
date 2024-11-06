// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: '¿What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: '¿What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: '¿What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: '¿How do you use your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: '¿What license does your project have?',
        choices: ['MIT', 'GPL', 'Apache', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: '¿How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: '¿How do you run the tests?',
    },
    {
        type: 'input',
        name: 'github',
        message: '¿What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: '¿What is your email address?',
        },
    ];

// TODO: Create a function to write README file
const generateREADME = (answers) => {
    return `
# ${answers.title}

![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license}.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, you can find me on GitHub: [${answers.github}](https://github.com/${answers.github}) or email me at ${answers.email}.
`;
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then((answers) => {
        const readmeContent = generateREADME(answers);
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) throw err;
            console.log('README.md has been created successfully!');
        });
    });
};

// Function call to initialize app
init();

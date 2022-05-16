// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"What is the title of the project?",
    },
    {
        type:"input",
        name:"description",
        message:"Provide a description for your README",
    },
    {
        type:"input",
        message:"What are the steps required to install your project?",
        name:"installation",
    },
    {
        type:"input",
        message:"Provide examples of how you use your project",
        name:"usage",
    },
    {
        type:"list",
        message:"Did you use a license for your project?",
        name:"license",
        choices: [
            'Apache [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            'Boost [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            'BSD [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            'N/A'
        ],
    },
    {
        type:"confirm",
        message:"Can other users contribute to this project?",
        name:"contribution",
    },
    {
        type:"input",
        message:"How do you test this project?",
        name:"test",
    },
    {
        type:"input",
        message:"The link for the Demo?",
        name:"link",
    },
    {
        type:"input",
        message:"GitHub Username",
        name:"git",
    },
    {
        type:"input",
        message:"E-mail",
        name:"email",
    },
]).then(userResponse=>{
    console.log(userResponse);
    console.log(userResponse.title);
})

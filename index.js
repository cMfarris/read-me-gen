// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"name",
        message:"name of the project?",
    },
    {
        type:"input",
        name:"statement",
        message:"Give a explanition of the project:",
    },
    {
        type:"input",
        name:"develop",
        message:"Describe the development?"
    },
    {
        type:"input",
        name:"usage",
        message:"What is this project usage for?"
    },
    {
        type: "input",
        name: "contributing",
        message: "who are the contributors?"
    },
    {
        type:"input",
        name: "test",
        message: "How would you test this"
    },
    {
        type:"list",
        name:"license",
        message:"what licencse would you use",
        choices: [
      "Apache 2.0", "MIT" ]
    },
    {
      type:"input",
      name: "id",
      message: "Enter github id:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address"
    },
]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) return console.log(error);
        console.log("README.md sucessful!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readMEData =generateMarkdown(answers)
        return readMEData
    })
    .then(readMEData =>writeToFile('README.md', readMEData))
}

// Function call to initialize app
init();

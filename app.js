const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const path = require("path")

const outputPath = path.resolve(__dirname, "output", "index.html")
 
// const promptUser = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the manager?'
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Please type in the manager Id.'
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Please type in the manager email.'
      },
      {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineer name?'
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'Please type in the engineer Id.'
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please type in engineer email.'
      },
      {
        type: 'input',
        name: 'InternName',
        message: 'What is the engineer name?'
      },
      {
        type: 'input',
        name: 'InternId',
        message: 'Please type in intern Id.'
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Please type in intern Email'
      }
    ]);

// .then ((answers)=>{
  console.log(answers)
// }) 

//   promptUser().then(answers => console.log(answers));
promptUser()
  .then(answers => console.log(answers))
  .then(projectAnswers => console.log(projectAnswers));

// // function to write README file
const writeToFile = fileName = data => {
    inquirer.prompt(questions).then((response)); 
    {
        return writeToFile(completeTemplate);
    }
};

// // function to initialize program
const init = () => {
    return inquirer.prompt;

};
// function call to initialize program
init()
// .then(userAnswers => {
//     return generate(userAnswers);
// })
// .catch(err => {
//     console.log(err);
// })
;
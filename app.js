const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const path = require("path")

const outputPath = path.resolve(__dirname, "output", "index.html")


inquirer
  .prompt([
  {
      type: 'input',
      name: 'managerName',
      message: "Please type in manager's name.",
      validate: managerName => {
        if (managerName) {
          return true;
        }  else {
          return false;
        }
      }
  },
{
          type: 'input',
            name: 'managerId',
              message: "Please type in manager's Id.",
                validate: managerId => {
                   if (managerId) {
                  return true; 
                } else {
                  return false;
              }
            }
      },
    {
      type: 'input',
      name: 'managerEmail',
      message: "Please type in manager's email.",
      validate: managerEmail => {
        if (managerEmail) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]),
  [(

    {
      type: 'input',
      name: 'engineerName',
      message: "Please type in engineer's name.",
      validate: engineerName => {
        if (engineerName) {
          return true;
        }  else {
          return false;
        }
      }
  },
{
          type: 'input',
            name: 'engineerId',
              message: "Please type in engineer's Id.",
                validate: engineerId => {
                   if (engineerId) {
                  return true; 
                } else {
                  return false;
              }
            }
      },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "Please type in engineer's email.",
      validate: engineerEmail => {
        if (engineerEmail) {
          return true;
        } else {
          return false;
        }
      }
    }
  )],
  [(

    {
      type: 'input',
      name: 'internName',
      message: "Please type in intern's name.",
      validate: internName => {
        if (internName) {
          return true;
        }  else {
          return false;
        }
      }
  },
{
          type: 'input',
            name: 'internId',
              message: "Please type in intern's Id.",
                validate: internId => {
                   if (internId) {
                  return true; 
                } else {
                  return false;
              }
            }
      },
    {
      type: 'input',
      name: 'internEmail',
      message: "Please type in intern's email.",
      validate: internEmail => {
        if (internEmail) {
          return true;
        } else {
          return false;
        }
      }
    }
  )]


.then ((answers)=>{
  console.log(answers)
}) 
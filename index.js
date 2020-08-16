const inquirer = require('inquirer');
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const outputPath = path.resolve(__dirname, "output", "index.html")



const promptManager = [
  {
    type: "input",
    name: "managerName",
    message: "Please type in manager's name.",
    validate: managerName => {
      if (managerName) {
        return true;
      }
      else {
        return false;
      }
    }
  }, {
    type: "input",
    name:"managerId",
    message: "Please type in manager's Id.",
    validate: managerId => {
      if (managerId) {
        return true;
      } else{
        return false;
      }
    }
  }
,{
  type: "input",
  name: "managerEmail",
  message: "Please type in manager's email.",
  validate: managerEmail =>
  if (managerEmail){
    return true;
  } else {
    return false;
  }
}]
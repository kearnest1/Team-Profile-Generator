const Intern = require("../lib/Intern");


function Intern (name, id, school = '') {
    this.name = name;
    this.id= id;
    this.school= school;
}

getName = function() {
    return this.name;
}

getID = function() {
    return this.id;

}

getSchool = function() {
    return this.school;
}; 

module.exports = Intern;

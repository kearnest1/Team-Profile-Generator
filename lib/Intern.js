class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
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

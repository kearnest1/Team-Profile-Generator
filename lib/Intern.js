class Intern {
    constructor(name, id, email) {
        this.name = name;
        this.id= id;
        this.email= email;
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

getRole() {
    return "Intern"
}
} 

module.exports = Intern;

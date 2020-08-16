class Engineer extends Employee {
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

getEmail = function() {
    return this.email;
}; 

module.exports = Engineer;

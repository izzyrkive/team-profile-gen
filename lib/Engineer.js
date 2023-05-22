const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        
        this.github = github;
        this.role = "Engineer";
    }

/* Methods for github and role */

    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }   
}

module.exports = Engineer;
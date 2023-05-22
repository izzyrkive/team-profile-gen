const inquirer = require("inquirer");
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        
        this.school = school;
        this.role = "Intern";
    }

/* Methods for school and role */

    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }   
}

module.exports = Intern;
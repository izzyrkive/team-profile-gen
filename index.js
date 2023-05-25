const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const teamOutputFile = path.join(teamOutputDirectory, "index.html");
const generateTeam = require("./src/generateHtml.js");
const path = require("path");

const teamArray = [];

function runApp() {
  initializeTeamCreation();

  function initializeTeamCreation() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "employeeType",
          choices: ["Manager", "Engineer", "Intern"],
        },
      ])
      .then(handleUserInput);
  }

  function handleUserInput(userInput) {
    switch (userInput.employeeType) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
    case "Manager":
        addManager();
        break;
      default:
        buildTeam();
    }
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the new manager's name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the new manager's employee ID number?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the new manager's email address?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the new manager's office number?",
        },
      ])
      .then(handleManagerAnswers);
  }

  function handleManagerAnswers(answers) {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
    teamArray.push(manager);
    initializeTeamCreation();
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the new engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the new engineer's employee ID number?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the new engineer's email address?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the new engineer's GitHub username?",
        },
      ])
      .then(handleEngineerAnswers);
  }

  function handleEngineerAnswers(answers) {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGithub
    );
    teamArray.push(engineer);
    initializeTeamCreation();
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the new intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the new intern's employee ID number?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the new intern's email address?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does the new intern attend?",
        },
      ])
      .then(handleInternAnswers);
  }

  function handleInternAnswers(answers) {
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    teamArray.push(intern);
    initializeTeamCreation();
  }

  function buildTeam() {
    console.log("Team has been created!");
    fs.writeFileSync(teamOutputFile, generateTeam(teamArray), "UTF-8");
  }
}

runApp();

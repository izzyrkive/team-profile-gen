// Packages
const Prompt = require('index.js');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateManager = managerTitle => {
  return managerTitle.map(manager => {
    return `<div class="card manager-card">
      <div class="card-header">
        <h5 class="card-title">${manager.getName()}</h5>
        <h6 class="card-subtitle">Manager</h6>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>`;
  }).join('');
};

const generateIntern = internTitle => {
  return internTitle.map(intern => {
    return `<div class="card intern-card">
      <div class="card-header">
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-subtitle">Intern</h6>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>`;
  }).join('');
};

const generateEngineer = engineerTitle => {
  return engineerTitle.map(engineer => {
    return `<div class="card engineer-card">
      <div class="card-header">
        <h5 class="card-title">${engineer.getName()}</h5>
        <h6 class="card-subtitle">Engineer</h6>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>`;
  }).join('');
};

// Generates all cards
const generateCards = teamArray => {
    const cardsArray = [];
    
    const managerTitle = [];
    const engineerTitle = [];
    const internTitle = [];
    
    teamArray.forEach(team => {
      switch (team.getRole()) {
        case 'Manager':
          managerTitle.push(team);
          break;
        case 'Engineer':
          engineerTitle.push(team);
          break;
        case 'Intern':
          internTitle.push(team);
          break;
      }
    });
    
    if (managerTitle.length) {
      cardsArray.push(generateManager(managerTitle));
    }
    
    if (engineerTitle.length) {
      cardsArray.push(generateEngineer(engineerTitle));
    }
    
    if (internTitle.length) {
      cardsArray.push(generateIntern(internTitle));
    }
    
    return cardsArray.join('');
  };

// Generates HTML Page
module.exports = cardsArray => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <style>
    body {
      background-color: #FCC9D5;
    }

    h1 {
      color: #FFFFFF;
      text-align: center;
      padding: 20px;
      background-color: #FFA8B6;
    }

    .card {
      background-color: #FFFFFF;
      margin-bottom: 20px;
    }

    .card-title {
      color: #FF3366;
      font-weight: bold;
    }

    .card-subtitle {
      color: #FF3366;
      font-size: 14px;
    }

    .list-group-item {
      color: #FF3366;
    }

    a {
      color: #FF3366;
    }
  </style>
</head>

<body>
  <header>
    <h1>My Team</h1>
  </header>

  <main class="container my-5">
    <div class="row">
      <!-- Manager Card -->
      <div class="col">
        <div class="card shadow-lg">
          <div class="card-body">
            <h5 class="card-title">Manager Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: Manager ID</li>
            <li class="list-group-item">Email: <a href="mailto:manager@example.com">manager@example.com</a></li>
            <li class="list-group-item">Office Number: Manager Office Number</li>
          </ul>
        </div>
      </div>

      <!-- Intern Card -->
      <div class="col">
        <div class="card shadow-lg">
          <div class="card-body">
            <h5 class="card-title">Intern Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: Intern ID</li>
            <li class="list-group-item">Email: <a href="mailto:intern@example.com">intern@example.com</a></li>
            <li class="list-group-item">School: Intern School</li>
          </ul>
        </div>
      </div>

      <!-- Engineer Card -->
      <div class="col">
        <div class="card shadow-lg">
          <div class="card-body">
            <h5 class="card-title">Engineer Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: Engineer ID</li>
            <li class="list-group-item">Email: <a href="mailto:engineer@example.com">engineer@example.com</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/engineer" target="_blank">engineer</a></li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</body>

</html>`;
};
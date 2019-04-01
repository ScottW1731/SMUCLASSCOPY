var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "scottwagner",

  // Your password
  password: "a35709gh9922cvn76",
  database: "greatBay_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

// connected as id 24

// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set your password",
      name: "password"
    },
    
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
    // 
    
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and item from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.item + " is ready for pick up!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });

  function auctionbid () {
    inquirer
      .prompt([
        // Here we give the user a list to choose from.
      {
      type: "list",
      message: "Which item would you like to bid on?",
      choices: ["Lego StarWars", "LCD monitor", "Christmas Tree"],
      name: "item"
      },

      ])
  }

  function auctionpost () {
    inquirer
      .prompt([
        // Here we give the user a list to choose from.
      {
      type: "list",
      message: "Which item would you like to post?",
      name: "item"
      },

      ])
  }


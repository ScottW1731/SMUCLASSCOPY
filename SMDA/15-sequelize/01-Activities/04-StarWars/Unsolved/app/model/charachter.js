// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "starwars" model that matches up with DB
var starwars = sequelize.define("starwars", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
starwars.sync();

// Makes the starwars Model available for other files (will also create a table)
module.exports = starwars;

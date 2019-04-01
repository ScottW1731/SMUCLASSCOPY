var express = require('express');

//setup dev environment
var isDev = (process.env.NODE_ENV.trim() === "development")
if (isDev) {//checks to see whether we set our node environment to development
    require('dotenv').config(); //grab local copy of env vars
}

//setup server
var port = process.env.PORT || 3000;
var app = express();

// Requiring our models for syncing
var db = require("./models");

//start server
db.sequelize.sync({force: isDev}).then(function() {//will only force sync if isDev is true
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});
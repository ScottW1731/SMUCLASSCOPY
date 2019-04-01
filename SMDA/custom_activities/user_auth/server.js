//setup dev environment if applicable
var isDev = process.env.NODE_ENV === 'development';
if (isDev) {
    require("dotenv").config();
}

// require dependencies
var express = require("express");
var path = require('path');
var db = require(path.join(__dirname + '/models'));
var jwt = require('express-jwt');

//express setup
var app = express();
var PORT = process.env.PORT || 3001;

//setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api/user", require('./routes/api'))
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./views/index.html"));
})
/*
    to protect routes with JWT, setup your JWT middleware BEFORE any routes you want to protect.
    optionally, you may specify which routes you want to protect like so:
    app.use("/protectme", jwt({...}))
        OR
    app.use(["/protectroute1", "/protectroute2"], jwt({...}))
*/
app.use(jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
}))
app.get("/getprotectedstuff", function(req, res) {
    res.json({
        message: "You should only be seeing this if you were successfully logged in."
    });
});

//sync database and start server
db.sequelize.sync({ force: isDev }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    })
});



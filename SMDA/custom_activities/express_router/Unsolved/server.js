//require dependencies
var express = require('express');
var apiRoutes = require('./routes/apiRoutes.js');
var htmlRoutes = require('./routes/htmlRoutes.js');

//initialize app
var app = express();

//define port on which to listen
var PORT = process.env.PORT || 3000;

//setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes for express app
//add code for a static public folder, as well as for html and api routes.
//YOUR CODE GOES HERE...


//start listening
app.listen(PORT, function() {
    console.log("App starting...\n",
                "Link: " + "http://localhost:" + PORT);
});
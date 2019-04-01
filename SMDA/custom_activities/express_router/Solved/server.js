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
//add routes to express app
app.use(express.static("public")); //everything in public folder is set to the url "/"
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//start listening
app.listen(PORT, function() {
    console.log("App starting...\n",
                "Link: " + "http://localhost:" + PORT);
});
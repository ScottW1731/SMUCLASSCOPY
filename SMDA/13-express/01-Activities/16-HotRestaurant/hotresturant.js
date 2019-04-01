// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// resturant tables (DATA)
// =============================================================
var tables = [
  {
    name: "table1",
    phoneNUM: "",
    email: "@gmailcom",
    Unique: "",
  },
  {
    name: "table2",
    phoneNUM: "",
    email: "@gmailcom",
    Unique: "",
  },
  {
    name: "table3",
    phoneNUM: "",
    email: "@gmailcom",
    Unique: "",
  },
  {
    name: "table4",
    phoneNUM: "",
    email: "@gmailcom",
    Unique: "",
  },
  {
    name: "table5",
    phoneNUM: "",
    email: "@gmailcom",
    Unique: "",
  }
];

  var waitlist = [
    {
      name: "tableinf",
      phoneNUM: "",
      email: "@gmailcom",
      Unique: "",
    }
  ]


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Pemail
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/makeReservations", function(req, res) {
    res.sendFile(path.join(__dirname, "makeReservations.html"));
  });
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  // Displays index tables
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  
  // Displays index tables
  app.get("/api/waitlist", function(req, res) {
    return res.json(tables);
  });

  // app.get("/api/tables/:table", function(req, res) {
  //   // var chosen = req.params.tables;
  
  //   // console.log(chosen);
  
  //   if ( tables.length >= 5) {
      
  //   }
      
      
  // });

  // Displays a single table, or returns false
  app.get("/api/tables/:table", function(req, res) {
    // var chosen = req.params.tables;
  
    // console.log(chosen);
  
    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i].routeName) {
        return res.json(tables[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New tables - takes in JSON input
  app.post("/api/tables", function(req, res) {
    console.log(req);
    // want fill up tables first
    // up to 5 tables

    // else put them in the wait list

    if(tables.length < 5 ){
      tables.push(req);
    }
    else {
      waitlist.push(req);
    }

  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
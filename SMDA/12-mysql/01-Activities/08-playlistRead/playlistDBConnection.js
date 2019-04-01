var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "scottwagner",

  // Your password
  password: "a35709gh9922cvn76",
  database: "playlistDB"
});

// connected as id 21


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createsongs();
});

function createsongs() {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Rocky Road",
      artist: 3.0,
      genre: 50
    },
    function(err, res) {
      console.log(res.affectedRows + " songs inserted!\n");
      // Call updatesongs AFTER the INSERT completes
      updatesongs();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updatesongs() {
  console.log("Updating all Rocky Road quantities...\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        genre: 100
      },
      {
        title: "Rocky Road"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " songs updated!\n");
      // Call deletesongs AFTER the UPDATE completes
      deletesongs();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deletesongs() {
  console.log("Deleting all strawberry icecream...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
    {
      artist: "strawberry"
    },
    function(err, res) {
      console.log(res.affectedRows + " songs deleted!\n");
      // Call readsongs AFTER the DELETE completes
      readsongs();
    }
  );
}

function readsongs() {
  console.log("Selecting all songs...\n");
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

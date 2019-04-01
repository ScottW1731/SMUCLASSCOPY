The steps to this method are as follows:
in your config.json file, set your development (and later your production) configs as follows:

  "development": {
    "use_env_variable": "LOCALDB",
    "dialect": "mysql"
  }

then, do an npm install for dotenv, and create a .env file in your root project folder. add this to your .env:

    LOCALDB=mysql://root:root@localhost:3306/testdb

a quick breakdown of this line: first is the environment variable name (LOCALDB), then an = sign, then the value you want the variable to be assigned. in this case it is a mysql link. note that the mysql link has both the username and password, followed by an @ symbol then the domain, port, and database name.

then in your package.json, you need to define a start script.
under scripts, insert the following line:

for windows: "devStartWin": "set NODE_ENV=development&& nodemon ./server.js",

NOTE: the lack of a space between development and && is intentional! do not remove, or code will break! This is because windows does not remove trailing whitespace when you set environment variables via the command line (which is what these scripts do), so even though we want to set NODE_ENV to "development", if you add the space it will actually look like "development ".

for mac: "devStartMac": "NODE_ENV=development nodemon ./server.js",

lastly, in your server.js, add the following snippets:

var isDev = (process.env.NODE_ENV.trim() === "development")
if (process.env.NODE_ENV.trim() === "development"){
    require('dotenv').config(); //grab local copy of env vars
}
...
...
//express stuff
...
...
db.sequelize.sync({force: isDev}).then(function() {
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});


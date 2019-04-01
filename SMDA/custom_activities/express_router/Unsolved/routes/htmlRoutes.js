var express = require('express');
var router = express.Router();
var path = require('path');

router.get("/", function(req, res) {
    res.status(200).sendFile(path.join(__dirname, '../views/index.html'));
});

//write a route for list.html as well as a catch-all route for 404.html
//YOUR CODE GOES HERE...

module.exports = router;
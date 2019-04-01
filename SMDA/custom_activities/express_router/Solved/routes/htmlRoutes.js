var express = require('express');
var router = express.Router();
var path = require('path');

router.get("/", function(req, res) {
    res.status(200).sendFile(path.join(__dirname, '../views/index.html'));
});

router.get("/list", function(req, res) {
    res.status(200).sendFile(path.join(__dirname, '../views/list.html'));
});

router.get("*", function(req, res) {
    res.status(404).sendFile(path.join(__dirname, '../views/404.html'));
});

module.exports = router;
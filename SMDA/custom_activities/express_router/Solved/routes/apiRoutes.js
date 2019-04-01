var express = require('express');
var router = express.Router();
var data = require('../db/data.js');

router.get("/cards", function(req, res) {
    res.status(200).json(data);
});

router.post("/cards", function(req, res) {
    data.push(req.body);
    res.status(200).json({msg: "Success!"});
});

module.exports = router;
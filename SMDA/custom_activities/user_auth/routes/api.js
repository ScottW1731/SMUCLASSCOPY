//require dependencies
var userAuthHelpers = require('../helpers/user_auth_helpers');
var express = require('express');
var router = express.Router();
var db = require('../models');

//User Creation Route
router.post("/new", function(req, res) {
    //generate a salt and save in var to be reused
    var salt = userAuthHelpers.getSalt();
    //create a user object, use getHash helper with salt to create hash.
    var newUser = {
        email: req.body.email.trim().toLowerCase(),
        hash: userAuthHelpers.getHash(req.body.password, salt),
        salt: salt
    }
    //add user to database
    db.User
        .create(newUser)
        .then(function(response) {
            //creation successful, send back a positive response
            res.json({
                success: true,
                message: "User Creation Successful!",
                token: userAuthHelpers.generateJWT(response)
            })
        })
        .catch(function(error) {
            //creation failed, send back a negative response
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "User Creation Failed!"
            })
        })
})
//user login route
router.post("/login", function(req, res) {
    //retrieve email and pass from post body
    var email = req.body.email
    var pass = req.body.password
    //search database for given user
    db.User
        .findOne({
            where: {
                email: email
            }
        })
        .then(function(response) {
            //if found, validate password, if not send back user not found error
            if (response) {
                //use the salt in the database response to hash the attempted password
                var inputHash = userAuthHelpers.getHash(pass, response.salt)
                //check to see if hashed password attempt matches hashed password in database
                //if successful, send positive response, else send negative response
                if (inputHash === response.hash) {
                    res.json({
                        success: true,
                        message: "Login authorized!",
                        token: userAuthHelpers.generateJWT(response)
                    })
                } else {
                    return res.status(400).json({
                        success: false,
                        message: "Incorrect password! Login not authorized!"
                    })
                }
            } else {
                return res.status(404).json({
                    success: false,
                    message: "User not found!"
                })
            }
        })
        .catch(function(error) {
            //something went wrong while searching database, send negative response
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "DB Error!"
            });
        });
});



module.exports = router;
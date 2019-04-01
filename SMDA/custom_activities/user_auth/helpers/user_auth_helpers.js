var crypto = require('crypto');
var jwt = require("jsonwebtoken");
var userAuthHelpers = {
    /*
        * @desc - creates a hash from a given password and salt
        * @params - password (String), salt (String)
        * @return - String
    */
    getHash: function (password, salt) {
        return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    },
    /*
        * @desc - creates a string of random bytes
        * @params - none
        * @return - String
    */
    getSalt: function () {
        return crypto.randomBytes(16).toString("hex");
    },
    /*
        * @desc - creates a JSON Web Token with a given user
        * @params - user (Object, should include user ID and email)
        * @return - Object
    */
    generateJWT: function (user) {
        let expire = new Date();
        expire.setDate(expire.getDate()+7);
        return jwt.sign({
            id: user.id,
            email: user.email,
            exp: expire.getTime()/1000
        }, process.env.JWT_SECRET);
    }
}

module.exports = userAuthHelpers;



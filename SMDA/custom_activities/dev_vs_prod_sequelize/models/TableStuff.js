module.exports = function (sequelize, DataTypes) {
    var Depts = sequelize.define("TableRow", {
        // Giving the Dept model a name of type STRING
        name: DataTypes.STRING,
        numbah: DataTypes.INTEGER
    });
    return Depts;
  };
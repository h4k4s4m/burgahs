var connection = require("./connection.js");

var orm = {
    // The last variable cb represents the anonymous function being passed from server.js
    findAll: function (tableInput, colToSearch, valOfCol, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            cb(result);
        });

    },

    insertOne: function (tableInput, colToSearch, valOfCol, cb) {
        var queryString = "INSERT into burgers(";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            cb(result);
        });

    },

    updateOne: function (tableInput, colToSearch, valOfCol, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            cb(result);
        });

    }

};

module.exports = orm;
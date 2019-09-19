
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (cb) {
        orm.updateOne("burgers", objcolsVal, conditiion, function (res) {
            cb(res);
        });
    },

    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database function for the controller (burger_controller.js).
module.exports = burger;
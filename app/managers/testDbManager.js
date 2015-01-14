/**
 * testDB manager
 * @module managers/testDbManager
 */
(function () {
    "use strict";

    var db = [
        {id:0, name: "test0" },
        {id:1, name: "test1" },
        {id:2, name: "test2" }
    ];

    module.exports = {
        getAll: function getAllFromDb() { return db },
        getById: function getIdFromDb(id) {
            return db[parseInt(id)];
        }
    }
}());
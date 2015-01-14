/**
 * Index Controller
 * @module controllers/indexController
 */
(function () {
    "use strict";

    var myDb = require('../managers/testDbManager');

    module.exports = {

        /** Get user info by id */
        getId: function * getId (next) {
            this.body = yield this.render('id', {
                title: 'Show detailes about item: ' + this.params.id,
                data: myDb.getById(this.params.id)
            });
            yield next;
        },

        /** Get list of all users DB */
        list: function * list (next) {
            this.body = yield this.render('list', {
                title: 'List of DB',
                items: myDb.getAll()
            });
            yield next;
        }
    }
}());
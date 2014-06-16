(function () {
    "use strict";

    var myDb = require('../managers/testDbManager');

    module.exports = {

        getId: function * getId (next) {
            this.body = yield this.render('id', {
                title: 'Show detailes about item: ' + this.params.id,
                data: myDb.getById(this.params.id)
            });
            yield next;
        },

        list: function * list (next) {
            this.body = yield this.render('list', {
                title: 'List of DB',
                items: myDb.getAll()
            });
            yield next;
        }
    }
}());
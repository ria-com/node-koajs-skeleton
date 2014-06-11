(function () {
    "use strict";

    var render = require('../helpers/render'),
        myDb = require('../managers/testDbManager');

    module.exports = {

        getId: function * getId (next) {
            this.body = yield render('id', {
                title: 'Show detailes about item: ' + this.request.params.id,
                data: myDb.getById(this.request.params.id)
            });
            yield next;
        },

        list: function * list (next) {
            this.body = yield render('list', {
                title: 'List of DB',
                items: myDb.getAll()
            });
            yield next;
        }
    }
}())
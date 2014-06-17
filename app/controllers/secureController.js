(function () {
    "use strict";

    //var passport = require('../helpers/passport');
    //var render = require('../helpers/render');

    module.exports = {
        index: function * login (next) {
            this.body = yield this.render('secure', {
                title: 'Secure App'
            });
            yield next;
        }
    }
}());
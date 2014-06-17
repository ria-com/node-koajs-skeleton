(function () {
    "use strict";

    module.exports = {
        login: function * login (next) {
            this.body = yield this.render('login', {
                title: 'login form'
            });
            yield next;
        }
    }
}());
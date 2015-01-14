/**
 * Login Controller
 * @module controllers/loginController
 */
(function () {
    "use strict";

    module.exports = {

        /** Get login page */
        login: function * login (next) {
            this.body = yield this.render('login', {
                title: 'login form'
            });
            yield next;
        }
    }
}());
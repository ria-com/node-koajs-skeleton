/**
 * Login Controller
 * @module controllers/loginController
 */
'use strict';
const co   = require('co');

module.exports = {

    /** Get login page */
    login: co.wrap(function * login (ctx, next) {
        yield ctx.render('login', {
            title: 'login form'
        });
        yield next();
    })
}

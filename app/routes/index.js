module.exports = function routes(app, passport) {
    "use strict";

    var Router = require('koa-router'),
        authed = require('../helpers/authedMiddleware');

    var router = new Router();

    router
        .get('/users', require('../controllers/indexController').list)
        .get('/users/:id', require('../controllers/indexController').getId)
        .get('/login', require('../controllers/loginController').login)
        .post('/login',
            passport.authenticate('local', {
                successRedirect: '/secure',
                failureRedirect: '/login'
            })
        )
        .get('/logout', function*(next) {
            this.logout();
            this.redirect('/login')
        })
        .get('/secure', authed, require('../controllers/secureController').index);

    app.use(router.middleware())

};
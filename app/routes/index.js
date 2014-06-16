module.exports = function routes(app) {
    "use strict";

    var Router = require('koa-router');

    var routes = new Router();

    /**
     * Routes
     * @example
     *    http://localhost:8081/users
     *    http://localhost:8081/users/1
     */
    routes
       .get('/users',     require('../controllers/indexController').list)
       .get('/users/:id', require('../controllers/indexController').getId);

    app.use(routes.middleware());
};
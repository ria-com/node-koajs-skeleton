/**
 * Session
 */
module.exports = function session(app) {
    var session = require('koa-sess');
    app.keys = [require('config').session.secretKey];
    app.use(session());
};
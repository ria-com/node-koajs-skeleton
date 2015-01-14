/**
 * Session
 * @module helpers/session
 */
module.exports = function session(app) {
    var session = require('koa-generic-session');
    app.keys = [require('config').session.secretKey];
    app.use(session());
};
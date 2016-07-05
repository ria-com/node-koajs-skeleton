/**
 * Session
 * @module helpers/session
 */
const convert = require('koa-convert');

module.exports = function session(app) {
    var session = require('koa-generic-session');
    app.keys = [require('config').session.secretKey];
    app.use(convert(session()));
};
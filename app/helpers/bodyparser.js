/**
 * Body parser
 */
module.exports = function bodyparser(app) {
    var bodyParser = require('koa-body-parser');
    app.use(bodyParser());
};
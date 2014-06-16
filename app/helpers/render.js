/**
 * Render
 */

module.exports = function render(app) {
    "use strict";

    var views = require('koa-render'),
        config = require('config');

    app.use(views(config.template.path, config.template.options ));
};

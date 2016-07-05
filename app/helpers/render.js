/**
 * Render
 * @module helpers/render
 */

"use strict";

module.exports = function render(app) {
    "use strict";

    var views = require('koa-views'),
        config = require('config');

    app.use(views(config.template.path, config.template.options));
};

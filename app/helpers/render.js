/**
 * Module dependencies.
 */
(function () {
    "use strict";
    var views = require('co-views'),
        config = require('config');

    module.exports = views(config.template.path, { ext: config.template.engine })
}())

/**
 * Middleware: authed
 * @module helpers/authedMiddleware
 */
"use strict";

module.exports = function(ctx, next) {
    if (ctx.isAuthenticated()) {
        return next()
    } else {
        ctx.redirect('/login');
    }
};

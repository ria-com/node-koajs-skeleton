/**
 * Middleware: authed
 */
module.exports = function *authed(next) {
    if (this.req.isAuthenticated()) {
        yield next;
    } else {
        this.redirect('/login');
    }
};
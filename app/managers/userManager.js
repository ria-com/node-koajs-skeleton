/**
 * App User Manager
 * @module managers/userManager
 */
(function () {
    "use strict";

    var users = [
        { id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' },
        { id: 2, username: 'joe', password: 'birthday', email: 'joe@example.com' }
    ];

    module.exports = {
        findById: function findById(id, fn) {
            var idx = id - 1;
            if (users[idx]) {
                fn(null, users[idx]);
            } else {
                fn(new Error('User ' + id + ' does not exist'));
            }
        },
        findByUsername: function findByUsername(username, fn) {
            for (var i = 0, len = users.length; i < len; i++) {
                var user = users[i];
                if (user.username === username) {
                    return fn(null, user);
                }
            }
            return fn(null, null);
        }
    }
}());
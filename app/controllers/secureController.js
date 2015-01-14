/**
 * Secure Controller
 * @module controllers/secureController
 */
(function () {
    "use strict";

    module.exports = {

        /** Get protected page (for logged in users only)  */
        index: function * index (next) {
            this.body = yield this.render('secure', {
                title: 'Secure App'
            });
            yield next;
        }
    }
}());
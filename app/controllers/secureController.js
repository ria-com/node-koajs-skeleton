/**
 * Secure Controller
 * @module controllers/secureController
 */
'use strict';
const co   = require('co');


module.exports = {

    /** Get protected page (for logged in users only)  */
    index: co.wrap(function * index (ctx, next) {
        yield ctx.render('secure', {
            title: 'Secure App'
        });
        yield next();
    })
}

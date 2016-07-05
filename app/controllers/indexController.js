/**
 * Index Controller
 * @module controllers/indexController
 */
'use strict';

const myDb = require('../managers/testDbManager'),
      co   = require('co');

module.exports = {
    index: co.wrap(function * getId (ctx, next) {
        yield ctx.render('index', {
            title: 'Home page'
        });
        yield next();
    }),

    /** Get user info by id */
    getId: co.wrap(function * getId (ctx, next) {
        yield ctx.render('id', {
            title: 'Show detailes about item: ' + ctx.params.id,
            data: myDb.getById(ctx.params.id)
        });
        yield next();
    }),

    /** Get list of all users DB */
    list: co.wrap(function * list (ctx, next) {
        yield ctx.render('list', {
            title: 'List of DB',
            items: myDb.getAll()
        });
        yield next();
    })
};

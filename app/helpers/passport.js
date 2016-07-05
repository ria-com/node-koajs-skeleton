/**
 * Passport
 * @module helpers/passport
 */
"use strict";

var passport = require('koa-passport'),
    userManager = require('../managers/userManager'),
    LocalStrategy = require('passport-local').Strategy;


passport.serializeUser(function(user, done) {
    done(null, user.id)
});

passport.deserializeUser(function(id, done) {
    userManager.findById(id, function (err, user) {
        console.log('findById ' + JSON.stringify(user));
        done(err, user);
    });
});


passport.use(new LocalStrategy(
    function(username, password, done) {
        userManager.findByUsername(username, function(err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
            if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
            return done(null, user);
        })
    }
));

module.exports = passport;

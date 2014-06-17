var koa = require('koa'),
    config = require('config'),
    passport = require('./helpers/passport');

var app = koa();

//Comment this line to disable sessions
require('./helpers/session')(app);

//Comment this line to disable koa-body-parser
require('./helpers/bodyparser')(app);

require('./helpers/render')(app);

app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app, passport);

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});

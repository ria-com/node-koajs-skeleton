var koa = require('koa'),
    routing = require('koa-routing'),
    config = require('config');

var app = koa();
app.use(routing(app));

require('./routes')(app);

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});

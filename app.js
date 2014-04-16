// 3rd-party modules
var express = require('express');
var connect = require('connect');
var jade = require('jade');

// internal modules
var config = require('./config');
var routes = require('./routes');

// create and configure express app
var app = express();
app.engine('jade', require('jade').renderFile);
app.set('view engine', 'jade');

// insert middlewares
app.use(connect.favicon('./public/favicon.ico'));
app.use(connect.compress());
app.use('/public', connect.static('./public'));
app.use('/uploads', connect.static('./uploads'));

// configure the routes
routes(app);

// starts listening
var server = app.listen(config.port, function () {
    // print all application settings
    console.log('env: %s', app.get('env'));
    console.log('trust proxy: %s', app.get('trust proxy'));
    console.log('jsonp callback name: %s', app.get('jsonp callback name'));
    console.log('json replacer: %s', app.get('json replacer'));
    console.log('case sensitive routing: %s', app.get('case sensitive routing'));
    console.log('strict routing: %s', app.get('strict routing'));
    console.log('view cache: %s', app.get('view cache'));
    console.log('view engine: %s', app.get('view engine'));
    console.log('views: %s', app.get('views'));

    // print listening information
    console.log('Listening on port %d ...', server.address().port);
});
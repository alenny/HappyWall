var express = require('express');
var connect = require('connect');
var config = require('./config').config;

var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(connect.favicon('public/favicon.ico'));

app.get('/', function (req, res) {
    res.render('index');
});

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

    console.log('Listening on port %d ...', server.address().port);
});
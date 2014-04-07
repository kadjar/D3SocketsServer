var express = require('express.io');
var routes = require('./routes');
var sinesvc = require('./services/sinewave');
var http = require('http');
var path = require('path');
var exphbs = require('express3-handlebars');
var app = express();
var port = process.env.PORT || 3000;
var server = app.http().io();
var timer = setInterval(function() {
	sinesvc.step('testpattern');
	app.io.broadcast('tick', sinesvc.get('testpattern'));
}, 500);

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'views/layouts'),
	partialsDir: path.join(__dirname, 'views/partials')
}));

app.configure(function() {
	app.set('port', port);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'handlebars');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use('/static', express.static(path.join(__dirname, 'public')));
	app.use(routes.fourohfour);
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.listen(port);

var express = require('express');
var app = express();

// app.set('view engine', 'jade');
app.use(express.static('public'));
app.set('views', __dirname + '/templates');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


/* get method here */
app.get('/test', function (req, res) {
    // var id = req.query.id
    res.render('test.html');
});

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/about', function (req, res) {
    res.render('about.html');
});

app.get('/contact', function (req, res) {
    res.render('contact.html');
});

app.get('/exchange', function (req, res) {
    res.render('exchange.html');
});

app.get('/evalution', function (req, res) {
    res.render('evalution.html');
});

app.get('/search', function (req, res) {
    res.render('search.html');
});

app.get('/outdoor', function (req, res) {
    res.render('outdoor.html');
});

/* server entry here */
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);

});

module.exports = app;

var express = require('express');
var app = express();
var routes = require('./routes/index');

app.set('view engine', 'jade');
app.use(express.static('public'));


/* server entry here */
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);

});

var express = require('express');
var app = express();


app.set('view engine', 'jade');
app.use(express.static('public'));


/* get method here */
app.get('/', function (req, res) {
    var id = req.query.id
    console.log(id);
    res.render('index', 
        { 
            title: '花猫菜单', 
            url: 'http://192.168.1.232:3000/images/represent'+id+'.png'
        });
});


/* server entry here */
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);

});

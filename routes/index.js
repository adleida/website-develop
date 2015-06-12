var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* get method here */
app.get('/', function (req, res) {
    // var id = req.query.id;
    res.render('/templates/test.html');
});

module.exports = router;

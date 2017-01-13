var express = require('express');


var app = express();

app.use(function (req, res, next) {

    if (req.url.indexOf('blah') > -1) {
        console.log('got blah!');
        res.header('fred', 'blah');
    }

    next();
});


app.use(express.static('./', {index:'src/index.html'}));

var server = app.listen(2112, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

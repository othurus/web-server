var express = require('express');
var app = express();
var port = 3000;
//app.get('/', function(req, res){
//    res.send('Hello express!');
//});

var middleware = require('./middleware.js');

//var middleware = {
//    requireAuthentication: function(req, res, next){
//        console.log('Private route hit!');
//        next();
//    },
//    logger: function(req, res, next){
//        console.log('Request Date: ' + new Date().toString());
//        console.log('Request method: ' + req.method);
//        console.log('Original URL: ' + req.originalUrl);
//        next();
//    }
//};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication , function(req, res){
   res.send('About us') ;
});

app.use(express.static(__dirname + '/public'));

//console.log(__dirname);

app.listen(port, function(){
    console.log('Express server is listening at port ' + port + '!'); 
});

 
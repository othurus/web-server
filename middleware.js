    var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('Private route hit!');
        next();
    },
    logger: function(req, res, next){
        console.log('Request Date: ' + new Date().toString());
        console.log('Request method: ' + req.method);
        console.log('Original URL: ' + req.originalUrl);
        next();
    }
};

module.exports = middleware;


var sendJsonResponse = function ( res, status, content ) {
    res.status( status );
    res.json( content );
};

/* GET 'Home' page */
module.exports.standardInputs = function(req, res, next) {
    res.render('index', {
        title: 'Standard Inputs'
    });
};

module.exports.dummySubmit = function(req, res, next) {
    sendJsonResponse( res, 200, { 'status': 'success' });
};
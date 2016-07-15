/* GET 'Home' page */
module.exports.standardInputs = function(req, res, next) {
    res.render('index', {
        title: 'Standard Inputs'
    });
};

module.exports.dummySubmit = function ( req, res, next ) {
    console.log( '### BEGIN FORM FIELDS' );
    console.log( req.body );
    res.redirect('back');
};
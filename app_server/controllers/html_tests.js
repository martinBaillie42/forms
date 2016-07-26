/* GET 'Home' page */
module.exports.standardInputs = function(req, res, next) {
    res.render('standard_inputs', {
        title: 'Standard Inputs'
    });
};

module.exports.mainMenu = function(req, res, next) {
    res.render('main_menu', {
        title: 'Main Menu'
    });
};

module.exports.dummySubmit = function ( req, res, next ) {
    console.log( '### BEGIN FORM FIELDS' );
    console.log( req.body );
    res.redirect('back');
};
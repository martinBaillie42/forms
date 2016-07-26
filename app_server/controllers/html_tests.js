/* GET 'Home' page */
module.exports.mainMenu = function(req, res, next) {
    res.render('main_menu', {
        title: 'Main Menu'
    });
};

module.exports.forms = function(req, res, next) {
    res.render('forms', {
        title: 'Forms'
    });
};

module.exports.tables = function(req, res, next) {
    res.render('tables', {
        title: 'Tables'
    });
};

module.exports.dummySubmit = function ( req, res, next ) {
    console.log( '### BEGIN FORM FIELDS' );
    console.log( req.body );
    res.redirect('back');
};
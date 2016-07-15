/* GET 'Home' page */
module.exports.standardInputs = function(req, res, next) {
    res.render('index', {
        title: 'Standard Inputs'
    });
};

module.exports.dummySubmit = function(req, res, next) {
    res.redirect('back');
};
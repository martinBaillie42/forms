/* GET 'Home' page */
module.exports.standardInputs = function(req, res, next) {
    res.render('index', {
        title: 'Standard Inputs'
    });
};


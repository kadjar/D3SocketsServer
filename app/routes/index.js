var sinewave = require('../equations').sinewave;

exports.index = function(req, res) {
 	res.render('index', { moment: sinewave(50, .02, Date.now() / 1000) });
};

exports.fourohfour = function(req, res) {
    res.status(404);
	res.render('404', {});
};

exports.index = function(req, res) {
 	res.render('index', { title: 'Express' });
};

exports.fourohfour = function(req, res) {
    res.status(404);
	res.render('404', {});
};

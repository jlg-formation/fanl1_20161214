var express = require('express');
var bodyParser = require('body-parser');


var router = express.Router();

module.exports = router;

router.use(bodyParser.json()); 

router.get('/s1', function(req, res, next) {
	console.log('s1 req', req.query);
	setTimeout(function() {
		res.json({ message: 'ok, je suis s1', query: req.query });
	}, 2000);
});

router.post('/s2', function(req, res, next) {
	console.log('s2 req', req.body);
	setTimeout(function() {
		res.json({ message: 'ok, je suis s2' });
	}, 1000);
});

router.get('/s3', function(req, res, next) {
	setTimeout(function() {
		res.json({ message: 'ok, je suis s3' });
	}, 3000);
});

router.get('/s4', function(req, res, next) {
	setTimeout(function() {
		res.json({ message: 'ok, je suis s4' });
	}, 4000);
});

router.get('/s5', function(req, res, next) {
	setTimeout(function() {
		res.json({ message: 'ok, je suis s5' });
	}, 1000);
});

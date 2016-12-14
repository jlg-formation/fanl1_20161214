var express = require('express');

var router = express.Router();

module.exports = router;

router.get('/s1', function(req, res, next) {
	setTimeout(function() {
		res.json({ message: 'ok, je suis s1' });
	}, 2000);
});

router.get('/s2', function(req, res, next) {
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

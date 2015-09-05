var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var User = require('../models/user.js');

router.get('/', function(req, res, next) {
	res.render('../views/index', {title: "Login"});
});

router.post('/', function (req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if(err) {
			return next(err);
		}
		if(!user) {
			return res.redirect('/');
		}
		req.logIn(user, function (err) {
			if(err) {
				return next(err);
			}
			if(user.locked_out == true) {
				console.log("locked out");
				return res.redirect('/');
			}else{
				User.findOneAndUpdate({username: user.username}, {last_access: new Date()}, function (err, user) {
				});
				console.log("going to users");
				return res.redirect('/users');
			}
		});
	})(req, res, next);
});

module.exports = router;
var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	if(req.isAuthenticated()) {
		// get user list from database
		User.find(function(err, users) {
		//User.find({sort:{last_name: -1, first_name: -1, username: -1}}, function(err, users) {
			if(err) {
				return err;
			}
			// if no error, send user info to render on users page
			res.render('../views/users', {title: "Users", users: users});
		});
	}else {
		// not authenticated, send back to start
		res.redirect('/');
	}
});

module.exports = router;

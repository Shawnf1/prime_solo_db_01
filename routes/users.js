var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var moment = require('moment');

/* GET users listing. */
router.get('/', function(req, res, next) {
	if(req.isAuthenticated()) {
		// get user list from database
		User.find(function(err, users) {
			if(err) {
				return err;
			}
			res.render('../views/users', {title: "Users", users: users});
		});
	}else {
		res.redirect('/');
	}
});

router.put('/', function(req, res, next) {
	var id = req.body.id;
	var status = req.body.status;
	console.log(id, status);
	if(!id || !status) {
		return res.status(500).send('Something broke!');
	}
	User.findOneAndUpdate({_id: id}, {locked_out: status}, function (err, user) {
		if(err) {
			return res.status(500).send('Something broke!');
		}
		return res.status(200).send('Ok');
	});
});

module.exports = router;

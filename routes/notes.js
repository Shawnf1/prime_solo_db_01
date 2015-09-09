/**
 * Created by Shawn on 9/9/15.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Note = require('../models/note.js');
var moment = require('moment');

/* GET users listing. */
router.get('/', function(req, res, next) {
	//console.log("in routes/notes.js", req.user.id);
	//res.render('/', {title: "Notes"});
	if(req.isAuthenticated()) {
		console.log("notes authed");
		Note.find({user: req.user.id}, function (err, notes) {
			if(err) {
				return err;
			}
			res.render('../views/notes', {title: "Notes", notes: notes});
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
	Note.findOneAndUpdate({_id: id}, {read_only: status}, function (err, user) {
		if(err) {
			return res.status(500).send('Something broke!');
		}
		return res.status(200).send('Ok');
	});
});

router.post('/', function (req, res, next) {
	if(req.isAuthenticated()) {
		var temp = req.body;
		temp.user_id = req.user.id;
		var note = new Note(temp);

		note.save(function (err)
			if (err) {
				return err;
			}
		});
	}

});

module.exports = router;

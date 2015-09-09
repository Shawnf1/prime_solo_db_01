/**
 * Created by Shawn on 9/9/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
	title: {type: String, required: true},
	desc: String,
	user: {type: String, required: true, index: {unique: true}},
	created_on: Date,
	updated_on: Date,
	read_only: {type: Boolean, default: false}
});

NoteSchema.pre('save', function(next) {
	var note = this;

	// set creation date
	if(!note.created_on) {
		note.created_on = new Date();
	}

	note.updated_on = new Date();
});

module.exports = mongoose.model('Note', NoteSchema);
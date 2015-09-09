/**
 * Created by Shawn on 9/9/15.
 */
$(document).ready(function() {

	var ajaxCall = $.ajax({
		type: 'GET',
		url: '/users',
		dataType: 'json'
	});

	// change the read only status
	$('li').on('change', '.locked', function () {
		var ajaxData = { };
		ajaxData["status"] = $(this).is(':checked');
		ajaxData["id"] = $(this).closest('li').attr('id');
		$.ajax({
			type: 'PUT',
			url: 'notes/',
			data: ajaxData
		});

		ajaxCall.done(function (res) {
			//console.log('done updating', res);
		});

		ajaxCall.fail(function (res) {
			//console.log("ajax error", res);
		});

		ajaxCall.always(function (res) {
			//console.log('ajax complete');
		});
	});

	// switch to users window
	$('#Users_btn').on('click', function () {
		window.location.replace('/users');
	});

	// save new note
	$('form').on('submit', function (e) {
		e.preventDefault();
		var ajaxData = { };
		ajaxData["title"] = $('#Title').val();
		ajaxData["desc"] = $('#Desc').val();
		ajaxData["note"] = $('#Note').val();
		ajaxData["read_only"] = $('#Read_chk').is(':checked');

		console.log("trying to add", ajaxData);

		var ajaxCall = $.ajax({
			type: 'POST',
			url: 'notes/',
			data: ajaxData
		});

		ajaxCall.done(function(res) {
			console.log("saved note", res);
		});
	});
});
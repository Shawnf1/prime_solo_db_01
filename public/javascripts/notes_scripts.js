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
		console.log("checkbox is ", ajaxData["status"]);
		$.ajax({
			type: 'PUT',
			url: 'notes/',
			data: ajaxData
		});

		ajaxCall.done(function (res) {
			console.log('done updating', res);
		});

		ajaxCall.always(function (res) {
			console.log('ajax complete');
		});
	});

	// switch to users window
	$('#Users_btn').on('click', function () {
		window.location.replace('/users');
	});

});
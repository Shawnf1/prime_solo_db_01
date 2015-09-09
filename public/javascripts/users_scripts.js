/**
 * Created by Shawn on 9/9/15.
 */
$(document).ready(function() {

	var ajaxCall = $.ajax({
		type: 'GET',
		url: '/users',
		dataType: 'json'
	});

	// change the lockout status
	$('li').on('change', '.locked', function () {
		var ajaxData = { };
		ajaxData["status"] = $(this).is(':checked');
		ajaxData["id"] = $(this).closest('li').attr('id');
		console.log("checkbox is ", status);
		$.ajax({
			type: 'PUT',
			url: 'users/',
			data: ajaxData
		});
	});

	// switch to notes window
	$('#Notes_btn').on('click', function () {
		window.location.replace('/notes');
	});
});
/**
 * Created by Shawn on 9/4/15.
 */
$(document).ready(function() {
	console.log("ready");

	var ajaxCall = $.ajax({
		type: 'GET',
		url: '/users',
		dataType: 'json'
	});

	ajaxCall.done(function(res) {
		console.log(res);

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
});
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
});
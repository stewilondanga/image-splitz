var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

Splitting({
	target: "[data-rows], [data-columns], [data-image]",
	by: "cells",
	image: true
});

$(document).ready(function() {
	$('table.standart input[type="checkbox"]').uniform();
	$('table.standart .drop').append('<span class="close"></span>');
	$('table.standart a.description').click(function() {
		$('table.standart .drop').stop(true, true).fadeOut(150);
		$('table.standart a.description').removeClass('active');
		$(this).parent().children('.drop').stop(true, true).fadeIn(150);
		$(this).addClass('active');
		return false;
	})
	$('table.standart .drop .close').click(function() {
		$(this).parent().stop(true, true).fadeOut(150);
		$(this).parents('td').children('a.description').removeClass('active');
		return false;
	})
	$('table.standart tr:nth-child(2n) td').css({'background': '#eaedef'});
});
$(function(){
	function mainTxtMargin(){
		var mainTxtHeight = $('.main_text').height();
		var mainTxtWidth = $('.main_text').width();
		var halfHeight = mainTxtHeight / 2;
		var halfWidth = mainTxtWidth / 2;

		$('.main_text').css("margin-top", -halfHeight);
		$('.bg_before').css("top", "calc(-50vh + " + halfHeight + "px)");
		$('.bg_before').css("left", "calc(-50vw + " + halfWidth + "px)");
	}

	$(window).resize(function() {
		mainTxtMargin();
	});

	mainTxtMargin();
});
$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
	//play hadouken sound
	playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
		  {'left':'1020px'}, 500,
		  function () {
		  	$(this).hide();
		  	$(this).css('left', '520px');
		  });
		})
		//show Hadouken
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to ready position

	});
});
	function playHadouken () {
		$('#hadouken-sound') [0].voulme = 0.5;
		$('#hadouken-sound') [0].load();
		$('#hadouken-sound') [0].play();
	};

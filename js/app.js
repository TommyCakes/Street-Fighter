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
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to ready position
		});
	$('body').on('keydown', function(e) {
    	if(e.which == 88) {
    		e.preventDefault();
    		 playJazz ();
    		 $('.ryu-ready').hide();
    		 $('.ryu-cool').show();
    		}
    		else {
    			return false;
    		}
});
	$('body').on('keyup', function() {
			 $('.ryu-cool').hide();
    		 $('.ryu-ready').show();



   });
});

	function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
    function playJazz () {
    	$('#jazz-track') [0].volume = 0.5;
    	$('#jazz-track') [0].load();
    	$('#jazz-track') [0].play();
    }
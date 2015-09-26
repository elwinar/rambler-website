domready(function() {
	var UP = "up";
	var DOWN = "down";
	var current = 0;
	var height = document.body.clientHeight;
	var number = document.querySelectorAll('body > section').length;
	var running = false;
	var duration = parseFloat(getComputedStyle(document.body).transitionDuration) * 1000;

	function slide(direction) {
		if (running) {
			return;
		}
		running = true;

		if (direction == UP) {
			current--;
		} else if (direction == DOWN) {
			current++;
		}

		current = current % number;
		if (current < 0) {
			current += number;
		}
		
		document.body.style.transform = 'translateY(' + (current * -height) + 'px)';

		setTimeout(function() {
			running = false;
		}, duration);
	}

	window.addEventListener('wheel', function(event) {
		if(event.deltaY > 0) {
			slide(DOWN);
		} else {
			slide(UP);
		}
	});

	window.addEventListener('keypress', function(event) {
		switch (event.keyCode) {
			case 38:
				slide(UP);
				event.preventDefault();
				break;
			case 40:
				slide(DOWN);
				event.preventDefault();
				break;
		}
	});

	window.addEventListener('resize', function() {
		setHeight();
		slide();
	});
});

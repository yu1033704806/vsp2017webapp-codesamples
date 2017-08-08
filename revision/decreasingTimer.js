var decreasingTimer = function(start, func) {

	var timerFunc = function(nextTime) {
		setTimeout(function() {
			func(nextTime);
			var nt = nextTime-1000;
			if (nt > 0)
				timerFunc(nextTime-1000);
		}, nextTime);
	}

	timerFunc(start);

}

var f = function(time) {
	console.log(time);
}

window.onload = function() {
	decreasingTimer(5000, f);
}
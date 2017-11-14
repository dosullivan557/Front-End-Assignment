// /**
// * @author Danny
// */
// //

var index = 0;
var i;
var slides = document.getElementsByClassName("slides");
var timeout;
var paused = false;
function showSlides() {
	for ( i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	index++;
	if (index > slides.length)
		index = 1
	slides[index - 1].style.display = "block";
	timeout = setTimeout(showSlides, 3000);
}

function next() {
	clearTimeout(timeout);
	if (paused) {
		document.getElementById("pauseButton").innerText = "Pause";
		paused = !paused;

	}
	showSlides();
}

function pause() {
		clearTimeout(timeout);
	if (!paused) {
		document.getElementById("pauseButton").innerText = "Play";
		paused = true;
	} else {
		document.getElementById("pauseButton").innerText = "Pause";
		paused = false;
		timeout = setTimeout(showSlides, 3000);
	}
}

function previous() {
	if (paused) {
		document.getElementById("pauseButton").innerText = "Pause";
		paused = !paused;
	}
	clearTimeout(timeout);
	for ( i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	index--;
	if (index < 1)
		index = slides.length;
	slides[index - 1].style.display = "block";
	timeout = setTimeout(showSlides, 3000);
}

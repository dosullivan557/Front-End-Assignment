// /**
// * @author Danny
// */
// //

var index = 0;
var i;
var slides = document.getElementsByClassName("slides");
var timeout;
var paused = false;

//Button elements for slideshow
var pauseButton = document.getElementById("pauseButton");
var nextButton = document.getElementById("nextButton");
var prevButton = document.getElementById("prevButton");

//Add Listeners
pauseButton.addEventListener("click", pause);
nextButton.addEventListener("click", next);
prevButton.addEventListener("click", previous);

window.onload = showSlides();
//shows the correct slides
function showSlides() {
	//Makes all the images invisible
	for ( i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	//selects the next image
	index++;
	//returns the index of the slides back to 0
	if (index > slides.length)
		index = 1;
	//make the correct image display
	slides[index - 1].style.display = "block";
	//define a pause length, and what to do after
	timeout = setTimeout(showSlides, 3000);
}
//next photo button handler
function next() {
	//cancel current pause
	clearTimeout(timeout);
	//changes the name of the pause button
	if (paused) {
		document.getElementById("pauseButton").innerText = "Pause";
		paused = !paused;

	}
	//starts the slideshow again
	showSlides();
}
//pause button handler
function pause() {
	//clears the current pause
		clearTimeout(timeout);
		//changes the text value in button
	if (!paused) {
		document.getElementById("pauseButton").innerText = "Play";
		paused = true;
	} else {
		document.getElementById("pauseButton").innerText = "Pause";
		paused = false;
		timeout = setTimeout(showSlides, 3000);
	}
}
//previous photo button handler
function previous() {
	//change button text
	if (paused) {
		document.getElementById("pauseButton").innerText = "Pause";
		paused = !paused;
	}
	//clears the timeout
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

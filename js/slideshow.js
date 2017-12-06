// /**
// * @author Danny
// */
// //

let index = 0;
let i;
let slides = document.getElementsByClassName("slides");
let timeout;
let paused = false;

//Button elements for slideshow
let pauseButton = document.getElementById("pauseButton");
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");

//googleSymbols
let googleSymbols = document.getElementsByClassName("googleSymbols");
googleSymbols[0].style.display = "block;"
googleSymbols[1].style.display = "none";
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
	if (paused)
		pause();
	//starts the slideshow again
	showSlides();
}
//pause button handler
function pause() {
	//clears the current pause
		clearTimeout(timeout);
		//changes the text value in button
	if (!paused) {
		googleSymbols[0].style.display="none";
		googleSymbols[1].style.display="block";
		paused = true;
	} else {
		googleSymbols[0].style.display="block";
		googleSymbols[1].style.display="none";
		paused = false;
		timeout = setTimeout(showSlides, 3000);
	}
}
//previous photo button handler
function previous() {
	//change button text
	if (paused)
		pause();

	//clears the timeout
	clearTimeout(timeout);
	index--;
	if (index < 1)
		index = slides.length;
	slides[index - 1].style.display = "block";
	timeout = setTimeout(showSlides, 3000);
}

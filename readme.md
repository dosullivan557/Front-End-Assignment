# Front End Web Development Practical Coursework
## Introduction
![CSS3 Logo](https://qph.ec.quoracdn.net/main-qimg-b5ca36317a8735169463da56f520f4eb.webp)
This project is a website dedicated to artwork by cloudyy.gif, and is used to show the work done by her so far. For this website I am using HTML5, CSS3, and JS5, which are the 3 world's leading front end web development languages.
## Checklist
- [x] Introduction
- [x] Designs
- [x] Switching page Javascript
- [x] Slideshow Javascript
- [x] SVG
- [x] API
- [x] Accessibility
- [ ] Issues
- [x] Built With
- [x] Versioning
- [ ] HTML Validator
- [x] CSS Validator
- [x] Javascript Validator
- [ ] Conclusion
## Design work
![general design](images/designs/general.jpg)
![homepage section design](images/designs/home.jpg)
![navigation bar design](images/designs/navigation.jpg)
![contact section design](images/designs/contact.jpg)
![prints section design](images/designs/prints.jpg)
![paintings section design](images/designs/paintings.jpg)
![about section design](images/designs/about.jpg)

## Development
### Switching Pages
This is included in the savepage.js file. It firstly adds all the listeners that will be needed to the elements in the HTML. One of these was to get all the elements with the ID of navItems (Which includes all of the elements from the navigation bar). I added the listener to this to to test for any clicks. When a click in this is detected, it checks to see which of the elements has been selected (the navItems are radio buttons, so only 1 element can be selected at any one time). Using this, it loops through the elements of navItems, and makes all of the sections `display: none;`, apart from the one which represents the selected, which is made `display:block;`.
### Slideshow
This is included in the slideshow.js file. This adds all of the event listeners to the 3 buttons used in this page; previous, pause and next. This then uses `window.onload = showSlides();`. This calls the main function of this file, which is where the picture changes occur. This function loops through all of the slides and makes them invisible. Then a local variable (which holds the value of the current image) is increased, so then this value can be called to get a specific image from the array of slides, and make that image visible. This then has a setTimeout, which specifies a time to wait for, before running the function called, which in this case is itself. For the handlers for the buttons, the next ones clear the current timeout, and then call the main function again, which will promptly change the image. The previous does the same thing, but it has to accommodate for the possibility that the counter could become a negative number, and therefore, I check this possibility. Finally, the pause button checks whether it is currently paused, and if it is, it displays a play button, otherwise it will display a pause button.

### Dynamically added information
The text on the about page is added to the page dynamically from a JSON file. It reads all the text from the `data.js` file, and then places the information on the page. It processes the data by using title and paragraphs to separate the information into the corresponding sections. However, as each section my not include a title, if the title of a section is none, then no title is added.
## SVG
* I used an SVG which was found [here](https://commons.wikimedia.org/wiki/Category:SVG_cloud_icons).
* I used and adapted the animate from [here](http://www.tutorialized.com/tutorial/Create-a-Gently-Swaying-Image-With-CSS3-Animation/85877).

## API
I am using 2 api's on my website; Flickr and Wikipedia. In the about tab, there is a section which is dedicated to inspirations. Using this information, I pull in images by this artist (Vincent Van Gogh), and it displays these images on the page. I then pull in a Wikipedia link to a page about him, and then displays it as an anchor tag on the website.

## Image compression
I used a website that applies compression algorithms to different image files and removes all unnecessary data from the image file. I used [Imagerecycle](https://www.imagerecycle.com), which uses an algorithm which changes the compression method depending on what file extension is being used. This allowed me to save 16.64MB of data.
## Quality and performance
[Dareboost](https://www.dareboost.com/) allows web developers to see what practices are being used on a website, as well as saying which ones are good or bad. As well as this, the website breaks down loads of information about the website, including time load, what is taking the time, and recommended practices.z

## Accessibility
[Accessibility - W3C - World Wide Web Consortium](https://www.w3.org/standards/webdesign/accessibility). I used this site to help me understand and implement more accessibility into my website.
My site has implemented it by having Alternative text for images. This is for screen readers, so it can easily tell the user what is being displayed.

## Issues

### Selling
I did not implement a feature which was discussed during the conception of the website. This was the backend features for adding backend stuff to allow the selling of information. This is because of the heavy influence on things such as dynamic pages for each element, as well as the database to support the system.

## Built With
These are what I used to develop this website.
* [Atom](https://atom.io) - Text editor
* [Github](https://github.com) - Version Control
* [Safari](https://support.apple.com/en_GB/downloads/safari) - Browser 1
* [Chrome](https://www.google.com/chrome/browser/desktop/index.html) - Browser 2



## Versioning

I used Git for version control. This is the world's leader in version control.
## HTML Validator
[HTML5 Validator](https://validator.w3.org/)
## CSS Validator
![Valid CSS!](http://jigsaw.w3.org/css-validator/images/vcss)
[CSS3 Validator](https://jigsaw.w3.org/css-validator/)
## Javascript Validator
There are no issues within the Javascript. This is shown because the console shows no errors.
## Conclusion
***
***

## Authors

My Github -> [dosullivan557](https://github.com/dosullivan557)
Daniel O'Sullivan

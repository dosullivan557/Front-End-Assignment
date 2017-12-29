// /**
// * @author Danny
// */
// //


(function(){
  //gets the variables of the text object from the JSON file,
  //and initialises other variables
  let title = document.getElementById("aboutName");
  let centreSection = document.getElementById("aboutSection");
  let obj = JSON.parse(jsonString);

  let titleArray = [];
  let textArray = [];
  //adds information from the JSON into the js variables
  for(i = 0; i<obj.siteContent.length; i++){
    titleArray[i] = obj.siteContent[i].title;
    textArray[i] =  obj.siteContent[i].aboutText;
  }

  //creates the HTML elements and adds the data into them
  for(i = 0; i < titleArray.length; i++){
    let tt = document.createElement("P");
    tt.setAttribute("class", "slidetext");
    tt.classList.add("aboutPara");
    let h4x = document.createTextNode(titleArray[i]);
    //if the title in the array at that position is equal to none, no
    //header elementwill be created.
    if (titleArray[i]!=="none") {
      document.getElementById("printsHeader").innerHTML =h4x.textContent;
    }

    let p1 = document.createElement("P");
    let p2 = document.createTextNode(textArray[i]);
    p1.appendChild(p2);
    // tt.appendChild(h4);
    tt.appendChild(p1);
    centreSection.append(tt);
  }
}());

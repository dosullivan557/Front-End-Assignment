// /**
// * @author Danny
// */
// //
(function(){
  let title = document.getElementById("aboutName");
  let centreSection = document.getElementById("aboutSection");
  let obj = JSON.parse(jsonString);

  let titleArray = [];
  let textArray = [];

  for(i = 0; i<obj.siteContent.length; i++){
    titleArray[i] = obj.siteContent[i].title;
    textArray[i] =  obj.siteContent[i].aboutText;
  }


  for(i = 0; i < titleArray.length; i++){
    let tt = document.createElement("P");
    tt.setAttribute("class", "slidetext");
    let h4x = document.createTextNode(titleArray[i]);
    if (titleArray[i]!=="none") {
      document.getElementById("printsHeader").appendChild(h4x);
    }

    let p1 = document.createElement("P");
    let p2 = document.createTextNode(textArray[i]);
    p1.appendChild(p2);
    // tt.appendChild(h4);
    tt.appendChild(p1);
    centreSection.append(tt);
  }
}());

// /**
// * @author Danny
// */
// //

var navElems = document.getElementsByClassName("navItems");
var nameStored=localStorage.name;
var sections = document.getElementsByClassName("Sections");
var clearButton = document.getElementById("clearbutton");

if(localStorage.page===undefined){
  navElems[0].checked=true;
  changePage();
}

//Add Listeners
clearButton.addEventListener("click", clearSave);
function changePage(){
  for (var i = 0; i < navElems.length; i++) {
    if(navElems[i].checked){
      localStorage.page = navElems[i].value;
      sections[i].style.display="block";
    }
    else {
      sections[i].style.display="none";
    }
  }
}

function clearSave(){
  window.localStorage.clear();
  location.reload();

}

function setLoadPage(){
  var elem = localStorage.page;
  //Default
  if(!localStorage.page){
    localStorage.page = document.getElementById("tab1");
    navElems[0].checked=true;
  }
  //checks which one was saved, and checks the corresponding radio button
  for (var i = 0; i < navElems.length; i++) {
    if(navElems[i].value===elem){
      navElems[i].checked=true;
      sections[i].style.display = "block";
      break;
    }

  }
}

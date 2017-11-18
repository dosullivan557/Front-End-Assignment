// /**
// * @author Danny
// */
// //
var navBar = document.getElementById("navbar");
var navElems = document.getElementsByClassName("navItems");
var pageStored=localStorage.page;
var sections = document.getElementsByClassName("Sections");
//dev vars
var clearButton = document.getElementById("clearbutton");
var refreshButton = document.getElementById("refreshButton");

if(localStorage.page===undefined){
  navElems[0].checked=true;
  changePage();
}
window.onload = setLoadPage();
//Add Listeners
navBar.addEventListener("click", changePage);

//dev Listeners
clearButton.addEventListener("click", clearSave);
refreshButton.addEventListener("click", refresh);

/* Checks the navigation bar to check which element
*  has been checked. Using this, it will determine
*  which section will be set to visible, and then
*  make the remaining sections to invisible.
*/
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
/* clears the localStorage, and refreshes the page as
*  if the user was visiting the page for the
*  first time
*/
function clearSave(){
  window.localStorage.clear();
  refresh();
}
//refreshes the page
function refresh(){
  location.reload();
}


function setLoadPage(){
  /* Sets the default page to load to home if there is
  *  no page saved.
  */
  if(!localStorage.page){
    localStorage.page = document.getElementById("tab1");
    navElems[0].checked=true;
  }
  /* Checks which one was saved, and checks the
  *  corresponding radio button
  */
  for (var i = 0; i < navElems.length; i++) {
    if(navElems[i].value===pageStored){
      navElems[i].checked=true;
      sections[i].style.display = "block";
      break;
    }

  }
}

// /**
// * @author Danny
// */
// //
let navBar = document.getElementById("navbar");
let navElems = document.getElementsByClassName("navItems");
let pageStored=localStorage.page;
let sections = document.getElementsByClassName("Sections");
//dev lets
let clearButton = document.getElementById("clearbutton");
let refreshButton = document.getElementById("refreshButton");

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
  for (let i = 0; i < navElems.length; i++) {
    if(navElems[i].checked){
      localStorage.page = navElems[i].value;
      sections[i].style.display="block";
      document.title="Cloudyy.gif - "+ navElems[i].value;
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
  for (let i = 0; i < navElems.length; i++) {
    if(navElems[i].value===pageStored){
      navElems[i].checked=true;
      sections[i].style.display = "block";
      document.title="Cloudyy.gif - "+ navElems[i].value;
      break;
    }

  }
}

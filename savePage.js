var navElems = document.getElementsByClassName("navItems");
var nameStored=localStorage.name;
var sections = document.getElementsByClassName("Sections");

function changePage(){
  for (var i = 0; i < navElems.length; i++) {
    if(navElems[i].checked){
      localStorage.page = navElems[i].value;
      // console.log(navElems[i].value)
    }
  }
  // setPage();
}
// function setPage(){
//   var elem = localStorage.name;
//
// }
function setLoadPage(){
  var elem = localStorage.page;
  //Default
  if(nameStored){
    localStorage.page = document.getElementById("tab1");
    navElems[0].checked=true;
    sections[i].style = "display:block;"
  }
  //checks which one was saved, and checks the corresponding radio button
  for (var i = 0; i < navElems.length; i++) {
    if(navElems[i].value===elem){
      navElems[i].checked=true;
    }
  }
}
function getLocalStoreName(){
  return localStorage.name;
}

let artist = document.getElementById("artists");

artist.addEventListener("change", check);

function check(){
  let strUser = artist.options[artist.selectedIndex].value;

  console.log(strUser);

}

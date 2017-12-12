// /**
// * @author Danny
// */
// //

let artist = document.getElementById("artists");

artist.addEventListener("change", check);

function check(){
  let strUser = artist.options[artist.selectedIndex].value;

  console.log(strUser);
  if(strUser!=="none"){
    wikipedia(strUser);
    flickr(strUser);
  }
  else{
    document.getElementById("flickr").innerHTML = '' ;
    document.getElementById("Wikipedia").innerHTML = '' ;
  }
}

// /**
// * @author Danny
// */
// //



//get the dropdown item for inspiration
let artist = document.getElementById("artists");
//add event listener to check for any changes
artist.addEventListener("change", check);

function check(){
  //get the value of the selected element from the dropdown box
  let strUser = artist.options[artist.selectedIndex].value;

  console.log(strUser);
  //checks whether the checked value is anything other than none, and if so,
  //it sends that variable to the wikipedia and flickr API's
  if(strUser!=="none"){
    wikipedia(strUser);
    flickr(strUser);
  }
  //If the value is none, then the current information is removed
  else{
    document.getElementById("flickr").innerHTML = '' ;
    document.getElementById("Wikipedia").innerHTML = '' ;
  }
}

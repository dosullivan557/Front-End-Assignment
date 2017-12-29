function initMap(){
  var location = {lat:52.6326185, lng: -1.1314454};
  var map = new google.maps.Map(document.getElementById("map"),{
    zoom: 13,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    icon: 'images/mapIcon.png',
    map: map

  });


}

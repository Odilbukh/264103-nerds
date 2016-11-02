// MAP
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.938707,30.323809)
  }
  var map = new google.maps.Map(document.getElementById('map'),
                                mapOptions);
  var image = "img/marker.png";
  var myLatLng = new google.maps.LatLng(59.938707,30.323809);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
// END MAP

// POPUP
var link = document.querySelector(".map-content .btn-red");
var popup = document.querySelector(".modal-form");
var cancel = document.querySelector(".modal-form .btn-gray")

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-form-show");
});

cancel.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-form-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-form-show")) {
      popup.classList.remove("modal-form-show");
    }
  }
});

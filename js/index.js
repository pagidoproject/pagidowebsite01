$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('.shr').addClass('shrink');
    }
    else {
    $('.shr').removeClass('shrink');
    }
  });
});


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(27.950575, -82.45717760000002),
    zoom: 9,
    scrollwheel: false,
    draggable: false,
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
                                mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);





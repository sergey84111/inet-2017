function initMap() {
         var stankin = {lat: 55.789745, lng: 37.595052};
         var map = new google.maps.Map(document.getElementById('map'),{zoom: 4,center: stankin});
         var marker = new google.maps.Marker({position: stankin,map: map});
	 var AfricaKml = new google.maps.KmlLayer({url: 'https://sites.google.com/site/radtarasov/kml/africa.kml',map: map});
  	 var AsiaKmlr = new google.maps.KmlLayer({url: 'https://sites.google.com/site/radtarasov/kml/asia.kml',map: map});
   	 var AustraliaKml = new google.maps.KmlLayer({url: 'https://sites.google.com/site/radtarasov/kml/australia.kml',map: map});
 	 var EuropeKml = new google.maps.KmlLayer({url: 'https://sites.google.com/site/radtarasov/kml/europe.kml',map: map});
 	 var NorthAmericaKml = new google.maps.KmlLayer({url: 'https://sites.google.com/site/radtarasov/kml/north_america.kml',map: map});
 	 var SouthAmericaKml = new google.maps.KmlLayer({url: 'https://sites.google.com/site/radtarasov/kml/south_america.kml',map: map});
  
/*  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 37.06, lng: -95.68}
  });

  var kmlLayer = new google.maps.KmlLayer({
    url: 'http://googlemaps.github.io/kml-samples/kml/Placemark/placemark.kml',
    suppressInfoWindows: true,
    map: map
  });

  kmlLayer.addListener('click', function(kmlEvent) {
    var text = kmlEvent.featureData.description;
    showInContentWindow(text);
  });

  function showInContentWindow(text) {
    var sidediv = document.getElementById('content-window');
    sidediv.innerHTML = text;
  }*/
}

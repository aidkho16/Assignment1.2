var map = L.map('map').setView([37.7, -122.4], 10);

  // load a tile layer
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by OpenStreetMap contributors',
	minZoom: 0,
	maxZoom: 20,
}).addTo(map);

// load GeoJSON from an external file
  $.getJSON("https://raw.githubusercontent.com/aidkho16/Assignment1.2/refs/heads/main/sf_crime.geojson",function(data){
    var ratIcon = L.icon({
    iconUrl: 'https://static.thenounproject.com/png/3084354-200.png',
    iconSize: [50,40]
  });
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data  ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: ratIcon});
    }
  }  ).addTo(map);
});

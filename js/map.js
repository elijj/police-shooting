// Function to draw your map



var drawMap = function() {
  // Provide your access token
  //L.mapbox.accessToken = 'pk.eyJ1IjoiZWxpamoiLCJhIjoiY2lmd3psY2s0M2o5N3RmbTFlcXpxYngxMSJ9.yLK8vRQjqHB0lQ0vkA6vPw';
  // Create a map in the div #map
  //var map =L.mapbox.map('map', 'mapbox.streets');
///

  // Create map and set view
 	var map = L.map('container').setView([51.505, -0.09], 13);
  // Create a tile layer variable using the appropriate url
	
  	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'container',
    accessToken: 'pk.eyJ1IjoiZWxpamoiLCJhIjoiY2lmd3psY2s0M2o5N3RmbTFlcXpxYngxMSJ9.yLK8vRQjqHB0lQ0vkA6vPw'
}).addTo(map);

  	getData;


	//var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  // Add the layer to your map
   	//layer.addTo(map);
  // Execute your function to get data
 	//getData;
}

// Function for getting data
var getData = function() {
	/*var data;
	$.ajax({
	     url:'https:..../json?year=2015&$limit=50000',
	     type: "get",
	     success:function(dat) {
	       data = dat
	       customBuild;
	       // Do something with your data!
	     }, 
	     dataType:"json"
	})
*/
  // Execute an AJAX request to get the data in data/response.js

  

  // When your request is successful, call your customBuild function

}

// Loop through your data and add the appropriate layers and points
var customBuild = function() {
	
	var layerName = new L.LayerGroup([]);
	var circle = new L.circleMarker([latitude, longitude], options);
	circle.addTo(layer);
	circle.bindPopup(text)

	// Be sure to add each layer to the map
	L.control.layers(null,layers).addTo(map);

	// Once layers are on the map, add a leaflet controller that shows/hides layers
  
}


//https://api.mapbox.com/v4/{resource}.json?access_token=pk.eyJ1IjoiZWxpamoiLCJhIjoiY2lmd3psY2s0M2o5N3RmbTFlcXpxYngxMSJ9.yLK8vRQjqHB0lQ0vkA6vPw

var buildTable = function (){

}



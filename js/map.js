//author: Eli Jackson Oct 18,2015
// Function to draw your map 
var drawMap = function() {
  // Create map and set view
 	var map = L.map('container').setView([39.5, -98.35], 4);
  // Create a tile layer variable using the appropriate url
  	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets-satellite',
    accessToken: 'pk.eyJ1IjoiZWxpamoiLCJhIjoiY2lmd3psY2s0M2o5N3RmbTFlcXpxYngxMSJ9.yLK8vRQjqHB0lQ0vkA6vPw'
}).addTo(map);
  	// Add the layer to your map
  	// Execute your function to get data
  	getData(map);
}

// Function for getting data
var getData = function(map) {
	var data;
	$.get( "data/response.json", function( data ) {
	  customBuild(data , map);  
	});
  // Execute an AJAX request to get the data in data/response.js
  // When your request is successful, call your customBuild function
}

// Loop through your data and add the appropriate layers and points
var customBuild = function(data, map) {
	var unknown = new L.LayerGroup([]);
	var white = new L.LayerGroup([]);
	var black = new L.LayerGroup([]);
	var azn = new L.LayerGroup([]);
	var nat = new L.LayerGroup([]);
	var island = new L.LayerGroup([]);
	var unarmedWhite = 0;
	var armedWhite = 0;
	var armedNon = 0;
	var unarmedNon = 0;
	$.map(data,function(value){
		if (value.Weapon == 'Unarmed'){
			if(value.Race != 'White'){
				unarmedNon += 1;
			}else{
				unarmedWhite += 1;
			}
		} else {
			if(value.Race != 'White'){
				armedNon += 1;
			}else{
				armedWhite += 1;
			}
		}
		if (value["Hit or Killed?"] == 'Killed'){
			var circle = new L.circleMarker([value.lat, value.lng],{
			color : 'red'
			});
			circle.setRadius(7);
		}else{
			var circle = new L.circleMarker([value.lat, value.lng],{
			color : 'black'
			});
			circle.setRadius(5);
		}
		circle.bindPopup(value.Summary + " <a href ="+value["Source Link"] +">(link)</a>");
		if (value.Race =='Unknown'){
			circle.addTo(unknown);
		}
		if (value.Race == 'White'){
			circle.addTo(white);
		}
		if (value.Race == 'Black or African American'){
			circle.addTo(black);
		}
		if (value.Race == 'Asian'){
			circle.addTo(azn);
		}
		if (value.Race == 'American Indian or Alaska Native'){
			circle.addTo(nat);
		}
		if (value.Race == 'Native Hawaiian or Other Pacific Islander'){
			circle.addTo(island);
		}	
	})
	var layers = {
		"Unknown" : unknown,
		"White" : white,
		"Black" : black,
		"Asian" : azn,
		"American Indian or Alaska Native" : nat,
		"Native Hawaiian or Other Pacific Islander" : island
	};
	L.control.layers(null,layers,{
		collapsed : false
	}).addTo(map);
	$('#x2y2').html(unarmedWhite);
	$('#x1y2').html(armedWhite);
	$('#x1y1').html(armedNon);
	$('#x2y1').html(unarmedNon);
}
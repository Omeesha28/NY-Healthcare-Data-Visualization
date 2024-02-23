// Creating the map object
let myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Use this link to get the GeoJSON data.
let link = "Resources/NY_Health_Facility_Lat_Long.csv";

// Getting our CSV data
d3.csv(link).then(function(data) {
  // Transform CSV data to GeoJSON format
  let geojson = {
    type: "FeatureCollection",
    features: data.map(function(d) {
      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [parseFloat(d.Latitude), parseFloat(d.Longitude)]
        },
        properties: d
      };
    })
  };

  // Creating a GeoJSON layer with the transformed data and adding it to the map
  L.geoJson(geojson).addTo(myMap);
}).catch(function(error) {
  // Handle error loading CSV
  console.log("Error loading CSV:", error);
});

// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method.
let marker = L.marker([45.52, -122.67], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

// Binding a popup to our marker
marker.bindPopup("Hello There!");



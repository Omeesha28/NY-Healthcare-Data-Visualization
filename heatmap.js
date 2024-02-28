// Initialize Leaflet map
let myMap = L.map("map", {
  center: [42.8, -75.0], // Center the map somewhere in New York State
  zoom: 7 // Adjust the zoom level accordingly
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Parse CSV data and create heat map
let csvData = 'Resources/heatmap.csv';
  
// Getting our CSV data
d3.csv(csvData).then(function(data) {

  // Transform CSV data to GeoJSON format
  let geojson = {
    type: "FeatureCollection",
    features: data.map(function(d) {
      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [parseFloat(d.Longitude), parseFloat(d.Latitude)]
        },
        properties: {
          Intenity: d["Count"]
        }
      };
    })
  };

  // Creating a GeoJSON layer with the transformed data and adding it to the map
  L.geoJson(geojson, {
    onEachFeature: function(feature, layer) {
      // Add popup to each marker
      let popupContent = `
        <b>Itenity:</b> ${feature.properties.Intenity}<br>
      `;
      layer.bindPopup(popupContent);
    }
  }).addTo(myMap);
}).catch(function(error) {
  // Handle error loading CSV or converting to GeoJSON
  console.log("Error:", error);
})

// Split the CSV data into rows
let rows = csvData.split('\n');

// Define an array to store heat map data
let heatMapData = [];

// Iterate over each row (starting from index 1 to skip the header row)
for (let i = 1; i < rows.length; i++) {
  // Split each row into columns
  let columns = rows[i].split(',');
  if (location) {  
    // Extract latitude, longitude, and count from the columns
  let latitude = parseFloat(columns[3]);
  let longitude = parseFloat(columns[4]);
  let count = parseInt(columns[2]);
  let Payment_Typology = parseInt(columns[1]);

  // Push latitude, longitude, and count as an array to the heat map data
  heatMapData.push([latitude, longitude, count, Payment_Typology]);
}}

// Create heat map layer using Leaflet.heat plugin
let heat = L.heatLayer(heatMapData, {
  radius: 20, // Set the radius of each heat point
  blur: 35 // Set the blur factor for the heat map layer
}).addTo(myMap);
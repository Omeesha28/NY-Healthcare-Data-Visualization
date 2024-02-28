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
let csvData = 'Resources/Goverment_Insurance.csv';
  
// Getting our CSV data
d3.csv(csvData).then(function(data) {

let heatMapData = [];

// Iterate over each row (starting from index 1 to skip the header row)
for (let i = 1; i < data.length; i++) {
  // Split each row into columns
  // let columns = rows[i].split(',');
  // if (columns) {  
    // Extract latitude, longitude, and count from the columns
  let latitude = parseFloat(data[i]['Latitude'])//columns[3]);
  let longitude = parseFloat(data[i]['Longitude'])//columns[4]);
  let count = parseInt(data[i]['Count'])//columns[2]);
  //let Payment_Typology = parseInt(columns[1]);

  // Push latitude, longitude, and count as an array to the heat map data
  heatMapData.push([latitude, longitude, count]);


// Create heat map layer using Leaflet.heat plugin
L.heatLayer(heatMapData, {
  radius: 20, // Set the radius of each heat point
  blur: 17 // Set the blur factor for the heat map layer
}).addTo(myMap)
}
}
)
// Creating the map object
let myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding the tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(myMap);

// links for GeoJSON data
let links = [
  "Resources/Government_Insurance_MarkerMap2_Data.csv",
  "Resources/Private_Insurance_MarkerMap_Data2.csv"
];

// Function to switch to government insurance dataset
function switchToGovernmentInsurance() {
  // Clear existing markers from the map
  myMap.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      myMap.removeLayer(layer);
    }
  });
  // Load and display government insurance data
  loadData("Resources/Government_Insurance_MarkerMap2_Data.csv");
}
// Function to switch to private insurance dataset
function switchToPrivateInsurance() {
  // Clear existing markers from the map
  myMap.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      myMap.removeLayer(layer);
    }
  });
  // Load and display private insurance data
  loadData("Resources/Private_Insurance_MarkerMap_Data2.csv");
}

// Loop to get data from each link
links.forEach(link => {
  d3.csv(link).then(function(data) {
    // Adding Markers - Filter out rows with missing or invalid coordinates
    data = data.filter(function(d) {
      return !isNaN(parseFloat(d.Latitude)) && !isNaN(parseFloat(d.Longitude));
    });
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
            Name: d["Facility Name"],
            AverageStay: d["Average Length of Stay"],
            TotalCharges: d["Total Charges"],
            TotalCosts: d["Total Costs"]
          }
        };
      })
    };
    
    // Creating a GeoJSON layer with the transformed data and adding it to the map
    L.geoJson(geojson, {
      onEachFeature: function(feature, layer) {
        // Add popup to each marker
        let popupContent = `
          <b>Hospital Name:</b> ${feature.properties.Name}<br>
          <b>Average Length of Stay:</b> ${feature.properties.AverageStay}<br>
          <b>Total Charges:</b> $${feature.properties.TotalCharges}</br>
          <b>Total Costs:</b> $${feature.properties.TotalCosts}
        `;
        layer.bindPopup(popupContent);
      }
    }).addTo(myMap);
  }).catch(function(error) {
  
    // Handle error loading CSV or converting to GeoJSON
    console.error("Error loading CSV or converting to GeoJSON:", error);
  });
});
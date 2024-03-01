// Creating the map object
let myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
  
  // Adding the tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Use this link to get the GeoJSON data.
  let link = "  Resources/Final_NY_data_2022.csv";
  
  // Getting our CSV data
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
            name: d["Facility Name"],
            RaceCount: d["Race Count"],
            TotalPatients:  d["Total Count"],
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
          <b>Name:</b> ${feature.properties.name}<br>
          <b>Race:</b> ${feature.properties.RaceCount}<br>
          <b>Total Patients:</b> ${feature.properties.TotalPatients}<br>
          <b>Total Charges:</b> $${feature.properties.TotalCharges}</br>
          <b>Total Costs:</b> $${feature.properties.TotalCosts}
        `;
        layer.bindPopup(popupContent);
      }
    }).addTo(myMap);
  }).catch(function(error) {
    // Handle error loading CSV or converting to GeoJSON
    console.log("Error:", error);
  })
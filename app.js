const csvFilePath = 'Resources/Final_NY_data_2022.csv';

    fetch(csvFilePath)
      .then(response => response.text())
      .then(csvData => {
        // Parse the CSV data using d3.csvParse
        const data = d3.csvParse(csvData);

        // Populate dropdown
        const dropdown = document.getElementById("selDataset");
        data.forEach((facility) => {
          const option = document.createElement("option");
          option.value = facility["Facility Name"];
          option.text = facility["Facility Name"];
          dropdown.appendChild(option);
        });

        // Get reference to the sample-metadata div
        const sampleMetadataDiv = document.getElementById("sample-metadata");

        // Dropdown event handling
        dropdown.addEventListener("change", function () {
          const selectedFacility = this.value;

          // Find the selected facility's data
          const selectedFacilityData = data.find(facility => facility["Facility Name"] == selectedFacility);

          // Display selected data in the sample-metadata div
          if (selectedFacilityData) {
            // Clear existing content
            sampleMetadataDiv.innerHTML = "";

            // Append new information
            for (const key in selectedFacilityData) {
              const p = document.createElement("p");
              p.textContent = `${key}: ${selectedFacilityData[key]}`;
              sampleMetadataDiv.appendChild(p);
            }

            // Create a bar chart
            createBarChart(selectedFacilityData);
          } else {
            console.error("Data not found for selected facility");
          }
        });
      })
      .catch(error => {
        console.error('Error loading CSV:', error);
      });

      function createBarChart(facilityData) {
        // Specify the fields you want to include in the bar chart
        const selectedFields = ["Total Charges", "Total Costs"];
      
        // Extract necessary data for the bar chart
        const labels = selectedFields;
        const values = selectedFields.map(field => facilityData[field]);
      
        // Create a trace for the bar chart
        const trace = {
          x: labels,
          y: values,
          type: 'bar',
          marker: {
            color: 'blue'
          }
        };
      
        // Create data array for the plot
        const data = [trace];
      
        // Define layout for the bar chart
        const layout = {
          title: 'Bar Chart for Selected Facility',
          xaxis: { title: 'Categories' },
          yaxis: { title: 'Values' }
        };
      
        // Create the bar chart using Plotly
        Plotly.newPlot('bar', data, layout);
      }
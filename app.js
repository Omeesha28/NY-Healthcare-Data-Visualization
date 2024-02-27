const csvFilePath = 'Resources/Final_NY_data_2022.csv';

// Function to fetch and parse CSV data
async function fetchAndParseCSV() {
    try {
        const response = await fetch(csvFilePath);
        const csvData = await response.text();
        return d3.csvParse(csvData);
    } catch (error) {
        console.error('Error loading CSV:', error);
        throw error; // Propagate the error for further handling if needed
    }
}

// Function to create a dropdown and populate it with facility names
function populateDropdown(data) {
    const dropdown = document.getElementById("selDataset");
    data.forEach((facility) => {
        const option = new Option(facility["Facility Name"], facility["Facility Name"]);
        dropdown.add(option);
    });
}

// Function to create and display metadata information
function displayMetadata(selectedFacilityData) {
    const sampleMetadataDiv = document.getElementById("sample-metadata");
    sampleMetadataDiv.innerHTML = "";

    for (const key in selectedFacilityData) {
        const p = document.createElement("p");
        p.textContent = `${key}: ${selectedFacilityData[key]}`;
        sampleMetadataDiv.appendChild(p);
    }
}

// Function to create a Plotly bar chart
function createBarChart(facilityData) {
    const selectedFields = ["Total Charges", "Total Costs"];
    const labels = selectedFields;
    const values = selectedFields.map(field => facilityData[field]);

    const trace = {
        x: labels,
        y: values,
        type: 'bar',
        marker: { color: 'blue' }
    };

    const data = [trace];

    const layout = {
        title: 'Bar Chart for Selected Facility',
        xaxis: { title: 'Categories' },
        yaxis: { title: 'Values' }
    };

    Plotly.newPlot('bar', data, layout);
}

// Function to create a Plotly pie chart
function createPieChart(facilityData) {
    const selectedFields = ["M", "F", "U"];
    const labels = selectedFields;
    const values = selectedFields.map(field => facilityData[field]);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const trace = {
        labels: labels,
        values: values,
        type: 'pie',
        marker: { colors: colorScale.range() }
    };

    const data = [trace];

    const layout = {
        title: 'Pie Chart for Race Count'
    };

    Plotly.newPlot('pie', data, layout);
}

//Function to create a Ploty Bubble chart
function createBubbleChart(facilityData) {
  const selectedFields = ["Total Count", "Race Count"];
  const labels = selectedFields;

  // Replace these placeholders with actual fields from your facilityData object
  const xValues = selectedFields.map(field => facilityData[field]); // Replace with actual data
  const yValues = selectedFields.map(field => facilityData[field]); // Replace with actual data
  const sizeValues = selectedFields.map(field => facilityData[field]); // Replace with actual data

  const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

  const trace = {
      x: xValues,
      y: yValues,
      mode: 'markers',
      marker: {
          size: sizeValues,
          color: colorScale.range()
      },
      text: labels
  };

  const data = [trace];

  const layout = {
      title: 'Bubble Chart for Gender'
      // You can add other layout options if needed
  };

  Plotly.newPlot('bubble', data, layout);
}

// Helper function to get random values (replace this with your actual data)
//function getRandomValue() {
  //return Math.random() * 1;
//}

// Main execution logic
async function initialize() {
    try {
        const data = await fetchAndParseCSV();
        populateDropdown(data);

        const dropdown = document.getElementById("selDataset");
        dropdown.addEventListener("change", function () {
            const selectedFacility = this.value;
            const selectedFacilityData = data.find(facility => facility["Facility Name"] === selectedFacility);

            if (selectedFacilityData) {
                displayMetadata(selectedFacilityData);
                createBarChart(selectedFacilityData);
                createPieChart(selectedFacilityData);
                createBubbleChart(selectedFacilityData);
            } else {
                console.error("Data not found for selected facility");
            }
        });
    } catch (error) {
        // Handle errors if necessary
    }
}

// Call the main execution logic
initialize();

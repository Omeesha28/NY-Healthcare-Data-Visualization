// Function to fetch and parse csvFilePath data
async function fetchAndParseCSV(filePath) {
    try {
        const response = await fetch(filePath);
        const csvData = await response.text();
        return d3.csvParse(csvData);
    } catch (error) {
        console.error('Error loading CSV:', error);
        throw error; // Propagate the error for further handling if needed
    }
}

// Function to create a dropdown and populate it with unique values
function populateDropdown(data, dropdownId, field) {
    const dropdown = document.getElementById(dropdownId);
    const uniqueValues =[...new Set(data.map(item => item[field]))];
    
    //Clear existing options
    dropdown.innerHTML ="";

    //Populate dropdown with unique values
    uniqueValues.forEach((value) => {
        const option = new Option(value, value);
        dropdown.add(option);
    });
}

// Function to create and display metadata information
function displayMetadata(selectedFacilityData) {
    const sampleMetadataDiv = document.getElementById("sample-metadata");
    sampleMetadataDiv.innerHTML = "";
    for (const key in selectedFacilityData) {
        const p= document.createElement("p");
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
  const xValues = selectedFields.map(field => facilityData[field]); 
  const yValues = selectedFields.map(field => facilityData[field]); 
  const sizeValues = selectedFields.map(field => facilityData[field]); 

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

//Function to handle change in Hospital Service Area dropdown
function serviceAreaChanged(selectedServiceArea) {

    //Filter data based on selectedServiceArea
    console.log("Hospital Service Area changed:", selectedServiceArea);
}

//Function to handle change in Hospital county
function countyChanged(selectedCounty) {
    //Implement the logic for handling changes in county here
    console.log("County changed:", selectedCounty);
}

//Function to handle change in Facility names dropdown
function facilityChanged(selectedFacility) {

    //Display detailed information for be selected
    console.log("Facility Name changed:", selectedFacility);
}

//Reading the csv file
async function initialize() {
    try {
        //CSV files
        const [data1, data2]= await Promise.all([
            fetchAndParseCSV('Resources/Final_NY_data_2022.csv'),
            fetchAndParseCSV('Resources/PieChart_NY_data_2022.csv')
        ]);

        //Combine the data from both files
        mainData=data1.concat(data2);
        //Populate the dropdown Hospital Service Area
        populateDropdown(mainData, 'anotherDropdown', 'Hospital Service Area');
        
        //First dropdown Hospital Service Area
        const dropdown1 = document.getElementById('anotherDropdown');
        dropdown1.addEventListener("change", function () {
            const selectedServiceArea =this.value;
            serviceAreaChanged(selectedServiceArea);
            
            //Filter data for the selected service area
            const filteredCountyData=mainData.filter(item => item ["Hospital Service Area"] === selectedServiceArea);

            //Populate the second dropdown (Hospital County) based on the filtered data
            populateDropdown(filteredCountyData, 'anotherDropdown2', 'Hospital County');

            //Clear the third dropdown (Facility Names)
            document.getElementById('selDataset').innerHTML ="";
        });
        
        //Listener for the second dropdown (Hospital County)
        const dropdown2= document.getElementById('anotherDropdown2');
        dropdown2.addEventListener("change", function () {
            const selectedCounty= this.value;
            countyChanged(selectedCounty);

            //Filter data for the selected conty
            const filteredFacilityData = mainData.filter(item => item["Hospital County"] === selectedCounty);
            populateDropdown(filteredFacilityData, 'selDataset', 'Facility Name');
        });

        //Listener for the third dropdown (Facility Names)
        const dropdown3 = document.getElementById('selDataset');
        dropdown3.addEventListener('change', function () {
            const selectedFacility = this.value;
            const selectedFacilityData = mainData.find(item => item["Facility Name"] === selectedFacility);
        
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
        console.error('Error initializing:', error);
        // Handle errors if necessary
    }
}

// Call the main execution logic
initialize();

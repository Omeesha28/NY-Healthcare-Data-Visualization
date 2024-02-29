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

function extractPaymentData(paymentString) {
    const paymentData = {};
    const regex = /\(([^)]+)\)/g;
    let match;
    
    while((match = regex.exec(paymentString)) !==null) {
        const [, content] = match;
        const [type, countString] = content.split(' ').filter(str => str.trim() !== '');
        const count= parseInt(countString, 10);

        if (!isNaN(count)) {
            paymentData[type]=count;
        }
    }

    console.log(paymentData);
    
    return paymentData;
    
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
    const raceInfo = facilityData["Race Count"];

    // Manually specify race categories
    const raceCategories = ["Black/African American", "Multi-racial", "Other Race", "White"];

    //Initialize an object to store counts for each category
    const raceCounts={};

    // Using regular expression to extract race categories and counts
    raceCategories.forEach(category => {
        const regex = new RegExp(`${category}\\s\\((\\d+)\\)`);
        const match = raceInfo.match(regex);
        const count = match ? parseInt(match[1], 10) : 0;
        raceCounts[category] = count;
    });
    
    //Create array of objects from the raceCounts object
    const raceData=Object.keys(raceCounts).map(race => ({race, count: raceCounts[race]}));

    const labels=raceData.map(entry => entry.race);
    const values=raceData.map(entry => entry.count);

    const colorScale = d3.scaleOrdinal().range(["blue", "orange", "green", "red"]);
    
    const trace = {
        labels: labels,
        values: values,
        type: 'pie',
        marker: { colors: colorScale.range() }
    };

    const data = [trace];

    const layout = {
        title: 'Pie Chart for Race Count',
        height:400,
        width:600
    };

    Plotly.newPlot('pie', data, layout);
}

//Function to create a Ploty Bubble chart
function createBubbleChart(facilityData) {
  const selectedFields = ["Total Count", "Gender"];
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
          sizemode:'diameter',
          sizeref: 0.001,
          sixemin:1,
          color: colorScale.range()
      },
      text: labels
  };

  const data = [trace];

  const layout = {
      title: 'Bubble Chart for Gender',
      // You can add other layout options if needed
  };

  Plotly.newPlot('bubble', data, layout);
}

//Function to create a Plotly pyramid chart for Payment Count
function createPyramidChart(paymentCountData) {
    if (!paymentCountData) {
        console.error('Payment count data is undefined or null.');
        return;
    }
    
    const paymentTypes = Object.keys(paymentCountData);
    const counts = paymentTypes.map(type => paymentCountData[type]);

    // Calculate percentage values
    const totalPayments = counts.reduce((sum, count) => sum + count, 0);
    const percentages = counts.map(count => (count / totalPayments) * 100);

    const trace = {
        labels: paymentTypes,
        values: percentages,
        type: 'funnel',
        textinfo: 'value+label',
        marker: {
            colors: ['#636efa', '#00cc96', '#bc5090', '#ff9966', '#ff5e5e'],
        },
    };

    const data = [trace];

    const layout = {
        title: 'Pyramid Chart for Payment Count',
        height: 400,
        width: 400,
    };

    Plotly.newPlot('pyramid', data, layout);
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
            fetchAndParseCSV('Resources/dashboard_data_2022.csv'),
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
            console.log('Selected Facility:', selectedFacility);
            const selectedFacilityData = mainData.find(item => item["Facility Name"] === selectedFacility);
        
            if (selectedFacilityData) {
                displayMetadata(selectedFacilityData);
                createBarChart(selectedFacilityData);
                createPieChart(selectedFacilityData);
                createBubbleChart(selectedFacilityData);

                //Extract and prepare data for Pyramid Chart
                const paymentCountData= selectedFacilityData["Payment Count"];
                const pyramidChartData=extractPaymentData(paymentCountData);
                createPyramidChart(pyramidChartData);
                
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

let data1;

async function fetchAndParseCSV(url) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        // Assign data to the global variable
        data1 = Papa.parse(data, { header: true }).data;
        return data1;
    } catch (error) {
        console.error('Error reading CSV files:', error);
        throw error;  // Rethrow the error to handle it at the caller's level
    }
}
// Function to populate the dropdown
function populateDropdown(dropdownId, field) {
    const dropdown = document.getElementById(dropdownId);

    // Ensure data is available before populating dropdown
    if (!data1) {
        console.error('Data not available. Please fetch the data first.');
        return;
    }
    
    // Extract unique values for the specified field
    const uniqueFacilities = ["", ...new Set(data1.map(item => item[field]))];

    // Populate dropdown with unique values
    uniqueFacilities.forEach((facility) => {
        const option = new Option(facility, facility);
        dropdown.add(option);
    });
}

function facilityChanged(selectedFacility) {
    // Your logic to update charts based on the selected facility
    console.log("Selected Facility:", selectedFacility);
    

    // For now, let's call a hypothetical updateCharts function
    updateCharts(selectedFacility);
}

function updateCharts(selectedFacility) {
    
    // Your logic to update charts based on the selected facility
    console.log("Updating charts for Facility:", selectedFacility);
    
    // Implement chart updates using the selectedFacility parameter
    const selectedFacilityData = data1.filter(item => item['Facility Name'] === selectedFacility);

    // Extract values for the bar chart
    const aprMDCDescription = selectedFacilityData.map(item => item['APR MDC Description']);
    const totalCost = selectedFacilityData.map(item => item['Total Cost']);
    const totalCharges = selectedFacilityData.map(item => item['Total Charges']);
    const count=selectedFacilityData.map(item => item['count']);
    // Create bar chart
    const trace1 = {
        x: aprMDCDescription,
        y: totalCost,
        type: 'bar',
        name: 'Total Cost'
    };

    const trace2 = {
        x: aprMDCDescription,
        y: totalCharges,
        type: 'bar',
        name: 'Total Charges'
    };

    const trace3 = {
        x: aprMDCDescription,
        y: count,
        type: 'bar',
        name: 'count'
    };
    const layout = {
        barmode: 'group',
        title: `Total Cost and Total Charges for ${selectedFacility}`,
        xaxis: {
            x:"hide",
            title: ''
        },
        yaxis: {
            title: 'Amount'
        },
        bargap: 0.1,
        width: 800,  // Adjust the width as needed
        height: 600
    };

    const chartData = [trace1, trace2, trace3];

    // Update or create the chart div
    Plotly.newPlot('bar', chartData, layout);

    //Pyramid chart
   
    // Reverse the data for ascending order
    const count2 = selectedFacilityData.map(item => item['count']);
    const aprMDCDescriptionData = selectedFacilityData.map(item => item['APR MDC Description']);

    const sortedData = count2.sort((a,b) => b - a);
    const top10Data = sortedData.slice(0, 10);
    // Create trace for the pyramid chart
    const trace = {
        type: 'funnel',
        x: top10Data,
        y: aprMDCDescriptionData,
        //textinfo: 'value',
        marker: {
            color: 'rgba(200, 50, 100, 0.6)',
            line: {
                //width: 0.1,
                width: 0.2,  // Adjust the width as needed
                height: 300
            }
        }
    };

    // Layout for the pyramid chart
    const layout2 = {
        title: 'Top 10 APR MDC Description- Click to show values',
        funnelmode: 'stack',
        showlegend: false,
        annotations: [],
        clickmode: 'event+select',
        updatemenus: [{
            type: 'buttons',
            showactive: false,
        }]
    };

    // Create annotations with specific values for each category
    const annotations = top10Data.map((value, index) => ({
        text: `${[index + 1]}: ${value.count2}`,
        showarrow: false,
        visible: false
    }));

    layout2.annotations = annotations;
    
    // Create pyramid chart
    const chartData2 = [trace];
    Plotly.newPlot('pyramid', chartData2, layout2);
    
    function toggleValuesVisibility() {
        const pyramidChart = document.getElementById('pyramid');
        const chartData = pyramidChart.data;
    
        // Toggle visibility for each annotation
        chartData[0].annotations.forEach(annotation => {
            annotation.visible = !annotation.visible;
        });
    
        // Update the pyramid chart with the modified data
        Plotly.update(pyramidChart, chartData2);
    }

    // Create pie chart data
    const avr_stay = selectedFacilityData.map(item => item['Avg Length of Stay']);
    const aprMDCDescriptionData2 = selectedFacilityData.map(item => item['APR MDC Description']);

    // Sort the data based on Avg Length of Stay in descending order
    const sortedData3 = avr_stay.map((value, index) => ({ stay: value, description: aprMDCDescriptionData2[index] }))
        .sort((a, b) => b.stay - a.stay);

    // Take the top 5 entries
    const top10Data2 = sortedData3.slice(0, 10);

    // Define five colors
    const colors = ['rgba(200, 50, 100, 0.6)', 'rgba(100, 200, 50, 0.6)', 'rgba(50, 100, 200, 0.6)', 'rgba(150, 75, 0, 0.6)', 'rgba(0, 150, 75, 0.6)'];

    // Create pie chart data for the top 5 categories
    const pieChartData = top10Data2.map((entry, index) => ({
    label: entry.description,
    value: entry.stay,
    color: colors[index]
    }));

    // Create a pie chart using Plotly
    const trace4 = {
    type: 'pie',
    labels: pieChartData.map(data => data.label),
    values: pieChartData.map(data => data.value),
    textinfo: 'label',
    hoverinfo: 'label+percent+value',
    marker: {
        colors: pieChartData.map(data => data.color),
        line: {
        width: 0.2
        }
    }
    };
    const layout4 = {
        title: 'Top 10 Categories with Highest Avg Length of Stay',
        showlegend: false,
        legend:{
            x:0.02,
            y:0.02,
            traceorder:'normal',
            orientation: 'bottom',
            font:{
                size:10,
            },
        },
        autosize: false,
        width:600,
        height:600,
    };

    // Create pie chart
    const chartData4 = [trace4];
    Plotly.newPlot('pieChart', chartData4, layout4);
}
// URLs of your CSV files
const csvFile1 = 'Resources/Final_dashboard_df.csv';

// Fetch and parse CSV data for the first file
fetchAndParseCSV(csvFile1)
    .then(() => {
            
    // Populate the Facility Name dropdown
    populateDropdown('selDataset', 'Facility Name');
    })
    
    .catch(error => {
        console.error('Error reading CSV files:', error);
    });

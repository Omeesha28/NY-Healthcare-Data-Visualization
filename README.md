# NY-Healthcare-Data-Visualization

# Project Idea

Visualization of discharge data for NY healthcare systems in 2022. 

# Data Source

https://healthdata.gov/State/Hospital-Inpatient-Discharges-SPARCS-De-Identified/43pi-8a8k/about_data

- NY Health Data for 2022

# Group Members 
Dave Burgman, Esha Patel, Kamilla Ribeiro

# Hypothesis
Given the known variations in reimbursement rates and patient demographics between Medicare/Medicaid and private insurance, we hypothesize that there will be significant differences in the average length of stay by APR-DRGs between these payer groups. Specifically, we anticipate that patients covered by Medicare/Medicaid will exhibit longer average lengths of stay compared to those covered by private insurance, reflecting potential disparities in resource utilization, care coordination, and discharge planning.
 
### PROJECT OUTINE

* Select the real-world data set.
* Download the dataset and convert it into a Pandas DataFrame.
* Perform data cleaning/deal with missing values using Pandas and NumPy.
* Plot interactive graphs to understand the data using visual libraries like leaflet and create a dashboard with user-driven interations such as dropdowns menu and has three views. 
* Data is stored in MongoDb. 
* Analysis of the data.

# Analysis
1. Data Overview:
- The dataset contains information about hospital inpatient discharges from New York State.
- It includes various attributes such as hospital service area, county, facility name, patient demographics (age, gender), diagnoses (APR MDC description), payment typologies, total charges, and total costs.

Resource Allocation: Variances in length of stay inform resource allocation strategies, enabling hospitals to optimize staffing and bed availability.
Financial Management: Length of stay directly influences costs; discerning differences between payer groups aids administrators in cost reduction and revenue enhancement efforts.
Quality of Care: Disparities in length of stay may signal variations in care quality, highlighting the need for equitable healthcare delivery.
Care Coordination and Discharge Planning: Longer stays can indicate inefficiencies in care coordination; analyzing length of stay assists in streamlining processes to improve patient outcomes.
Policy and Regulation: Length of stay data informs healthcare policy decisions, aiding policymakers in designing interventions to promote efficiency and quality across payer groups.


2. Data Cleaning and Preprocessing:
- We cleaned the data using pandas by dropping confidential records, merging latitude and longitude data so we can map our hospital facilites, and converting columns to appropriate data types.

3. Descriptive Statistics:

Summary statistics can be calculated for numerical variables like total charges and total costs. Categorical variables such as gender, race, and payment typologies can be analyzed for frequency distributions.

4. Visualization:

- We have created 3 Heatmaps to visualize the distribution of payment typologies across different healthcare facilities. First heat map shows government insurance such as Medicaid, Medicare, Etc. Second heathmap shows us private insurance. The last heat map shows us other type of payments such as self pay, etc. The geographic plot can be used to visualize the location of healthcare facilities in New York State.

- On our dashboard, we have created a dropdown menus for Facility Names. Once you choose a option for Facility name, you will get a bar chart showing the total cost, total charges and total count per MDC Description. You will also be able to see a Pyramid chart with the top 10 APR MDC Description to see the most and least likey reason someone was admitted into the hospital. Last, you will see a pie chart that shows the average length of stay per APR MDC Description per facility. 

- We have created marker maps which show us the governmenet and private insurance per hospital. It shows the average length of stay, average total costs and and average total charges for the insurance type. 



#### Data Visulaization:

##### Marker Maps

Government Insurance

![output](Government_Marker_Map.png)

Private Insurance 

![output](Private_Marker_Map.png)


##### Dashboard

![output](Dashboard_1.png)
![output](Dashboard_2.png)
![output](Dashboard_3.png)


##### Heat Maps

Government Insurance

![output](Government_Insurance_HeatMap.png)

Private Insurance 

![output](Private_Insurance_HeatMap.png)

Other Insurance Types

![output](Other_Type_Payments_HeatMap.png)

##### Scatterplots

Government Scatterplot

![output](Govt_Ins_Scatterplot.png)

Private Scatterplot

![output](Pvt_Ins_Scatterplot.png)




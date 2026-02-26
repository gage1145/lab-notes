---
cssclass: home
---

>[!multi-column]
>>[!blank-container]
>>## [[MNPRO TODO]]
>>```dataview
>>TASK
>>FROM "MNPRO Lab Notebook/MNPRO TODO"
>>WHERE !completed
>>```
>
>>[!blank-container]
>>## [[Priogen TODO]]
>>```dataview
>>TASK
>>FROM "Priogen Lab Notebook/Priogen TODO"
>>WHERE !completed
>>```
---
>[!multi-column]
>>[!blank-container|wide-2]
>>## Experiments per Month
>>```dataviewjs
>>let pages = dv.pages("#experiment").where(p => p.start_date);
>>
>>let groups = pages
>>	 .groupBy(p => {
>>		let d = new Date(p.start_date);
>>		return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
>>	 })
>>	.sort(g => g.key);
>>
>>let dates = groups.map(g => g.key).values;
>>let counts = groups.map(g => g.rows.length).values;
>>let color = "#5CEF88";
>>
>>const chartData = {
>>	type: 'line',
>>	data: {
>>	    labels: dates,
>>	    datasets: [{
>>			label: '# of Experiments',
>>		    data: counts,
>>		    borderColor: color,
>>		    borderWidth: 5,
>>	    }]
>>	},
>>	options: {
>>		responsive: true,
>>		scales: {
>>		    x: {
>>		        type: 'time',
>>			    time: {
>>				    unit: 'month',
>>			        displayFormats: {
>>				        month: 'MMM yyyy'
>>			        }
>>			    },
>>			    ticks: {
>>				    color: color,
>>			    }
>>		    },
>>		    y: {
>>				ticks: {
>>					color: color,
>>				}
>>			}
>>		},
>>		plugins: {
>>		    legend: { display: false }
>>		},
>>		onHover: (event, chartElements) => {
>>			event.native.target.style.cursor = 'default';
>>		}
>>	}
>>};
>>
>>window.renderChart(chartData, this.container);
>>```
>
>>[!blank-container]
>>## Experiments per Project
>>
>>```dataviewjs
>>let pages = dv.pages("#experiment").where(p => p.project);
>>
>>// Group by project link
>>let groups = pages
>>  .groupBy(p => p.project)
>>  .sort(g => g.rows.length, 'desc');
>>
>>// Extract labels and counts
>>let labels = groups.map(g => g.key.path.split("/").pop().replace(".md", "")).values;
>>let counts = groups.map(g => g.rows.length).values;
>>let color = "#5CEF88";
>>
>>// Generate dynamic colors  
>>function generateColors(n) {  
>>	return Array.from({ length: n }, (_, i) => {  
>>		const lightness = 20 + (80 / n) * i;  
>>		return `hsl(140, 70%, ${lightness}%)`;  
>>	});  
>>}
>>
>>let dynamicColors = generateColors(labels.length);
>>
>>const chartData = {
>>	type: 'pie',
>>    data: {
>> 	   labels: labels,
>> 	   datasets: [{
>> 		   label: 'Experiments by Project',
>> 		   data: counts,
>> 	       borderColor: "#000",
>> 	       borderWidth: 2,
>> 		   backgroundColor: dynamicColors
>> 	   }]
>>	},
>>	options: {
>> 	   responsive: true,
>> 	   plugins: {
>> 	       legend: {
>> 		       position: 'bottom',
>> 		       labels: {
>> 			       color: color
>> 			   }
>> 		   }
>> 	   },
>>		onHover: (event, chartElements) => {
>>			event.native.target.style.cursor = 'default';
>>		}
>>	}
>>};
>>
>>window.renderChart(chartData, this.container);
>>```
---
## Projects

>[!multi-column]
>>### In-Progress
>>
>>```dataview
>>TABLE WITHOUT ID
>>file.link AS Project, start AS "Start Date", association AS Association, length(file.inlinks) AS Experiments
>>FROM #project 
>>WHERE status = "in-progress"
>>```
>
>>### Completed
>>
>>```dataview
>>TABLE WITHOUT ID
>>file.link AS Project, start AS "Start Date", association AS Association, length(file.inlinks) AS Experiments
>>FROM #project
>>WHERE status = "completed"
>>```

## Experiments

>[!multi-column]
>>### In-Progress
>>```dataview
>>TABLE WITHOUT ID
>>file.link AS Experiment,
>>project AS Project, 
>>start_date AS Date
>>FROM #experiment 
>>WHERE status = "in-progress"
>>SORT start_date DESC
>>```
>
>>### Completed
>>```dataview
>>TABLE WITHOUT ID
>>file.link AS Experiment,
>>project AS Project, 
>>start_date AS Date
>>FROM #experiment 
>>WHERE status = "completed"
>>SORT start_date DESC 
>>LIMIT 10
>>```
>
## Meetings

```dataviewjs
const DQL = `
TABLE WITHOUT ID
file.link AS Meeting,
summary AS Summary
FROM #meeting 
SORT date DESC
LIMIT 10
`

dv.execute(DQL)

dv.container.classList.add("meetingTable")
```
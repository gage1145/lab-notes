---
cssclass: home
---

## Projects

```dataviewjs
let pages = dv.pages("#experiment");
let dates = pages.groupBy(p => p['start_date']).key;
let counts = [];

for (let date in dates) {
	let exps = pages.where(p => p.start_date == date).length();
	counts.push(exps);
}

dv.list(counts);
```

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
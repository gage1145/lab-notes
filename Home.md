---
---

## Projects
### In-Progress

```dataview
TABLE WITHOUT ID
file.link AS Project, start AS "Start Date", association AS Association, length(file.inlinks) AS Experiments
FROM #project 
WHERE status = "in-progress"
```

### Completed

```dataview
TABLE WITHOUT ID
file.link AS Project, start AS "Start Date", association AS Association, length(file.inlinks) AS Experiments
FROM #project
WHERE status = "completed"
```

---
## Experiments
### In-Progress

```dataview
TABLE WITHOUT ID
file.link AS Experiment,
project AS Project, 
start_date AS Date, 
protocols AS Protocols 
FROM #experiment 
WHERE status = "in-progress"
SORT start_date DESC
```

### Completed

 ```dataview
TABLE WITHOUT ID
file.link AS Experiment,
project AS Project, 
start_date AS Date, 
protocols AS Protocols 
FROM #experiment 
WHERE status = "completed"
SORT start_date DESC 
```

---
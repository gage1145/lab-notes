>[!multi-column]
>
>># Projects
>>## In-Progress
>>```dataview
>>LIST FROM "lab_notebook/Projects" WHERE status = "in-progress"
>>```
>>## Completed
>>```dataview
>>LIST FROM "lab_notebook/Projects" WHERE status = "completed"
>>```
>
>># Experiments
>>## In-Progress
>>```dataview
>>TABLE WITHOUT ID
>>file.link AS Experiment,
>>project AS Project, 
>>start_date AS Date, 
>>protocols AS Protocols 
>>FROM "lab_notebook/Experiments"
>>WHERE status = "in-progress"
>>```
>>## Completed
>> ```dataview
>>TABLE WITHOUT ID
>>file.link AS Experiment,
>>project AS Project, 
>>start_date AS Date, 
>>protocols AS Protocols 
>>FROM "lab_notebook/Experiments"
>>WHERE status = "completed"
>>```

>[!multi-column]
>
>># Projects
>>## In-Progress
>>```dataview
>>LIST FROM #project WHERE status = "in-progress"
>>```
>>## Completed
>>```dataview
>>LIST FROM #project WHERE status = "completed"
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
>>FROM #experiment 
>>WHERE status = "in-progress"
>>```
>>## Completed
>> ```dataview
>>TABLE WITHOUT ID
>>file.link AS Experiment,
>>project AS Project, 
>>start_date AS Date, 
>>protocols AS Protocols 
>>FROM #experiment 
>>WHERE status = "completed"
>>```

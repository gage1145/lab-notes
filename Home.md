
> [!Projects]+
> # Active
>```dataview
>LIST FROM "lab_notebook/Projects" WHERE status = "active"
>```
> # Completed
>```dataview
>LIST FROM "lab_notebook/Projects" WHERE status = "completed"
>```

> [!Experiments]+
> # In-Progress
>```dataview
>TABLE project, protocols FROM "lab_notebook/Experiments"
>```
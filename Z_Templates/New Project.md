---
name: <% tp.file.title %>
author: Gage Rowden
date created: <% tp.date.now("YYYY-MM-DD") %>
tags: project
abbreviation: GR
status: active
start: <% tp.date.now("YYYY-MM-DD") %>
end:
duration: 3 years
funding agency: 
funding code: 
---
# Experiments

```dataview
LIST
FROM #experiment WHERE project = this.project.name
```

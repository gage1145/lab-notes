<%*
const title = tp.file.title;
let newTitle;
if (title.startsWith("Untitled")) {
		newTitle = await tp.system.prompt("Enter note title");
		await tp.file.rename(newTitle);
}
-%>
---
name: <% newTitle %>
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
## Overview

## Experiments

```dataview
TABLE protocols FROM #experiment WHERE project = this.project.name
```

<%*
const title = tp.file.title;
const path = tp.file.path(false);

let ass = "MNPRO";
const pattern = /MNPRO/;

if (!pattern.test(path)) {
	ass = "Priogen";
}

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
association: <% ass %>
duration: 3 years
funding agency:
funding code:
---
## Overview

## Experiments

```dataview
TABLE WITHOUT ID
file.name AS Experiment,
protocols AS Protocols
FROM #experiment WHERE project = this.file.link
```

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
tags: [protocol]
association: <% ass %>
---

## Equipment
- Equip1
- Equip2
## Consumables
- Consumable1
- Consumable2
## Protocol
1. Step 1
2. Step 2
	1. Substep1


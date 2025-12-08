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
tags: [protocol]
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


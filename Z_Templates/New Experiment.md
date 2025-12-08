<%*
const title = tp.file.title;
const date = tp.date.now("YYYY-MM-DD")
let newTitle;
let project;
if (title.startsWith("Untitled")) {
	newTitle = await tp.system.prompt("Enter note title");
	project = await tp.system.prompt("Enter the associated project");
	newTitle = date + " " + newTitle;
	project = "[[" + project + "]]"
	await tp.file.rename(newTitle);
}
-%>
---
name: <% newTitle %>
start_date: <% date %>
end_date:
status: in-progress
tags:
	- experiment
project: <% project %>
protocols:
---
## Purpose

## Design

## Results
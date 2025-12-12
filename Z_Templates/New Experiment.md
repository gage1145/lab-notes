<%*
const title = tp.file.title;
const path = tp.file.folder(true);
const project = tp.file.folder(false);
const date = tp.date.now("YYYY-MM-DD");
let newTitle;

const patterns = [
  { regex: /MNPRO/, value: "MNPRO" },
  { regex: /Priogen/, value: "Priogen" },
];

let ass = patterns.find(p => p.regex.test(path))?.value ?? "Unknown";

if (title.startsWith("Untitled")) {
	newTitle = await tp.system.prompt("Enter note title");
	// Check if the experiment title starts with a digit.
	// Don't add the date if so.
	if (!/^\d/.test(newTitle)) {
		newTitle = date + " " + newTitle;
	}
	await tp.file.rename(newTitle);
}
-%>
---
name: <% newTitle %>
start_date: <% date %>
end_date:
status: in-progress
tags: experiment
project: "[[<% project %>]]"
continued_from: 
association: <% ass %>
protocols:
---
## Purpose

## Design

## Results
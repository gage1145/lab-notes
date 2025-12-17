<%*
const title = tp.file.title;
const path = tp.file.folder(true);
const date = tp.date.now("YYYY-MM-DD");
let newTitle;

const asses = [
  { regex: /MNPRO/, value: "MNPRO" },
  { regex: /Priogen/, value: "Priogen" },
];

let ass = asses.find(p => p.regex.test(path))?.value ?? "Unknown";

if (title.startsWith("Untitled")) {
	newTitle = await tp.system.prompt("Enter note title");
	newTitle = date + " " + newTitle;
	await tp.file.rename(newTitle);
}
-%>
---
name: <% newTitle %>
date: <% date %>
tags: meeting
continued_from:
association: <% ass %>
summary:
---

## **Attendees**
- 

## Overview
1. 
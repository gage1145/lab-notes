<%*
const title = tp.file.title;
const date = tp.date.now("YYYY-MM-DD");
let newTitle;

const projectFolder = "lab_notebook/Projects";
const allFiles = app.vault.getMarkdownFiles();
let project;
let projects;

projects = allFiles.filter(f => f.path.startsWith(projectFolder + "/"));
projects = projects.map(f => f.basename);

if (title.startsWith("Untitled")) {
	newTitle = await tp.system.prompt("Enter note title");
	newTitle = date + " " + newTitle;
	project = await tp.system.suggester(
		projects,
		projects,
		false,
		"Select associated project"
	);
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
protocols:
---
## Purpose

## Design

## Results
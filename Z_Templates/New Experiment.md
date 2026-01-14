<%*
const title = tp.file.title;
const path = tp.file.folder(true);
const project = tp.file.folder(false);
const date = tp.date.now("YYYY-MM-DD");
let newTitle;
let protocolFile;
let protocolContent = "";

// Association detection
const asses = [
  { regex: /MNPRO/, value: "MNPRO" },
  { regex: /Priogen/, value: "Priogen" },
];

let ass = asses.find(p => p.regex.test(path))?.value ?? "Unknown";

// Rename note
if (title.startsWith("Untitled")) {
	newTitle = await tp.system.prompt("Enter note title");
	if (!/^\d/.test(newTitle)) {
		newTitle = date + " " + newTitle;
	}
	await tp.file.rename(newTitle);
} else {
	newTitle = title;
}

// Get protocol files
const protocolFolder = path.split("/")[0] + "/Protocols";
const protocolFiles = app.vault
	.getMarkdownFiles()
	.filter(f => f.path.startsWith(protocolFolder + "/"));

// Protocol suggester
protocolFile = await tp.system.suggester(
	protocolFiles.map(f => f.basename),
	protocolFiles,
	false,
	"Select associated protocol"
);

// Load protocol content WITHOUT frontmatter
// if (protocolFile) {
// 	const raw = await app.vault.read(protocolFile);
// 	protocolContent = raw.replace(/^---\s*[\s\S]*?\s*---\s*/m, "").trim();
// }
// protocolContent = protocolContent.replaceAll("##", "###")
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
protocols: "[[<% protocolFile?.basename ?? "" %>]]"
---
## Purpose

## Design

## Results
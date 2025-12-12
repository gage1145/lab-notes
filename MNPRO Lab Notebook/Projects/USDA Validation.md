---
name: USDA Validation
author: Gage Rowden
date created: 2025-12-04
tags: [project]
abbreviation: UV
status: in-progress
start: 2025-12-04
end:
association: MNPRO
---

## Overview

## Samples

```dataview
LIST
FROM #sample WHERE project = this.name
```

## Experiments

```dataview
TABLE WITHOUT ID
file.name AS Experiment,
protocols AS Protocols
FROM #experiment 
WHERE project = this.file.link
```

## Results

```dataviewjs
// --- Enable async ---
const projectPath = dv.current().file.path;
console.log("Project Path:", projectPath);

// Get all experiment pages that link to this project
const experiments = dv.pages("#experiment")
    .where(p => p.project && p.project.path === projectPath);

console.log("Matched experiments:", experiments);

// Async helper: extract the first image after "## Results"
async function getResultsImage(page) {
    const content = await dv.io.load(page.file.path);  // <-- MUST await
    const lines = content.split("\n");

    // Find "## Results" header
    let idx = lines.findIndex(l => l.trim().toLowerCase() === "## results");
    if (idx === -1) return "";

    // Find first embedded image
    for (let i = idx + 1; i < lines.length; i++) {
        let line = lines[i].trim();
        let match = line.match(/!\[\[(.+?)\]\]/);
        if (match) return `![[${match[1]}]]`;
    }

    return "";
}

// Build final table rows (async map)
const rows = [];
for (let exp of experiments) {
    rows.push([
        exp.file.link,
        exp.project,
        await getResultsImage(exp)
    ]);
}

// Render table
dv.table(["Experiment", "Project", "Result Image"], rows);
```

## Meetings

```dataview
LIST FROM #meeting 
WHERE project = this.link LIMIT 6
```

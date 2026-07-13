---
name: Deer Capture
author: Gage Rowden
date created: 2026-06-29
tags: [project]
abbreviation: GR
status: in-progress
start: 2026-06-29
end:
association: MNPRO
duration: 3 years
funding agency:
funding code:
---

## Overview

## Experiments

```dataview
TABLE WITHOUT ID
file.link AS Experiment,
start_date AS Date,
protocols AS Protocols
FROM #experiment WHERE project = this.file.link
SORT Date DESC
```

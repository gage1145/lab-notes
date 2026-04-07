---
name: Misc
author: Gage Rowden
date created: 2026-04-07
tags: [project]
abbreviation: GR
status:
start: 2026-04-07
end:
association: MNPRO
duration: 3 years
funding agency:
funding code:
---

## Overview

Not a project, but a collection of miscellaneous experiments that don't have an associated project (e.g. lab swabs, reader test runs, etc.)

## Experiments

```dataview
TABLE WITHOUT ID
file.link AS Experiment,
start_date AS Date,
protocols AS Protocols
FROM #experiment WHERE project = this.file.link
SORT Date DESC
```

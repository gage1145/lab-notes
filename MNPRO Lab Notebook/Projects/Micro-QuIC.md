---
name: undefined
author:
  - Gage Rowden
  - Damani Bryant
  - Peter Larsen
date created: 2026-02-11
tags:
  - project
abbreviation: GR
status: in-progress
start: 2026-02-11
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
file.name AS Experiment,
protocols AS Protocols
FROM #experiment WHERE project = this.file.link
```

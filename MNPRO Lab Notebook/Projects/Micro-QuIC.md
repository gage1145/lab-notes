---
name: MicroQuIC
author: Gage Rowden
date created: 2026-02-07
tags: [project]
abbreviation: MQ
status: in-progress
start: 2026-02-12
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
start_date AS Date,
protocols AS Protocols
FROM #experiment WHERE project = this.file.link
SORT Date DESC
```

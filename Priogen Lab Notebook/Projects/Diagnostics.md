---
name: Diagnostics
author: Gage Rowden
date created: 2025-12-10
tags: [project]
abbreviation: GR
status: active
start: 2025-12-10
end:
duration:
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

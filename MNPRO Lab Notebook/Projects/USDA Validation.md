---
name: USDA Validation
author: Gage Rowden
date created: 2025-12-04
tags: [project]
abbreviation: UV
status: in-progress
start: 2025-12-04
end:
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
FROM #experiment WHERE project = this.file.link
```

## Meetings

```dataview
LIST FROM #meeting WHERE project = this.name LIMIT 6
```

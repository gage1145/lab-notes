---
name: USDA Validation
author: Gage Rowden
date created: 20205-12-04
tags: [project]
abbreviation: NP
status: active
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
LIST
FROM #experiment WHERE project = this.name
```

## Meetings

```dataview
LIST FROM #meeting WHERE project = this.name LIMIT 6
```

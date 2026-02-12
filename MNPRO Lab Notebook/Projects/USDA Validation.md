---
name: USDA Validation
author: Gage Rowden
date created: 2025-12-04
tags: [project]
abbreviation: UV
status: in-progress
start: 2025-07-14
end:
association: MNPRO
---

## Overview

This project is in collaboration with the USDA. They have experimentally inoculated white-tailed deer with CWD$^+$ prions, and gathered samples from the animals every three months. We will be using RT-QuIC and Nano-QuIC to detect prions in these samples.

## Experiments

```dataview
TABLE WITHOUT ID
file.name AS Experiment,
start_date AS Date,
protocols AS Protocols
FROM #experiment 
WHERE project = this.file.link
SORT Date DESC
```

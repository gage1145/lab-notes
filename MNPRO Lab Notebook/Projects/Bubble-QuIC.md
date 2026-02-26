---
name: Bubble-QuIC
author: Gage Rowden
date created: 2026-02-26
tags: [project]
abbreviation: GR
status: in-progress
start: 2026-02-26
end:
association: MNPRO
duration: 3 years
funding agency:
funding code:
---

## Overview

This project is an attempt to exploit the fact that the liquid air interface is an important component in RT-QuIC reactions. Using a sparger, we will attempt to introduce persistent microbubbles into the reaction mix to possibly improve the kinetics and detection properties of the reaction.

## Experiments

```dataview
TABLE WITHOUT ID
file.link AS Experiment,
start_date AS Date,
protocols AS Protocols
FROM #experiment WHERE project = this.file.link
SORT Date DESC
```

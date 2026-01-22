---
name: 2026-01-05 Database Meeting
date: 2026-01-05
tags: [meeting]
continued_from:
association: Priogen
summary: The meeting focused on improving database structure and workflows to better support sample diagnostics and QC. Key discussion points included preventing overwrites with null values, adding a diagnosis button, incorporating AUC-based QC metrics, and creating a separate diagnoses/results table to handle multiple runs per sample. The team also discussed reorganizing the sample table layout, adding a “Retest Needed” field, and updating database SOPs. Initial action items to add a diagnosis table and diagnosis button were completed shortly after the meeting.
---

## **Attendees**
- Roxy
- Gage

## Overview
1. I need to add logic not to overwrite fields with null if a tech is updating info (esp if that sample already has results)
2. Add a button for diagnosis.
3. Maybe incorporate AUC for QC metrics.
4. Maybe add a Results table for samples with multiple runs.
	1. I think this is definitely what needs to be done.
	2. Maybe call it Diagnoses.
5. Can I have the sample table be organized more like [this](https://docs.google.com/spreadsheets/d/1cgE6XdzcumlAfetppZW2UcuZ0JQ81PogwrFGOIViS9E/edit?gid=0#gid=0)?
6. Add a "Retest Needed" field for a sample.
7. Update database SOPs.

## TODO
- [x] Add a diagnosis table ✅ 2026-01-08
- [x] Add a diagnosis button to the reaction view ✅ 2026-01-08
- [ ] 
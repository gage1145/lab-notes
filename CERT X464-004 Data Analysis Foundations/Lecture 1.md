---
name: Lecture 1
date: 2026-03-11
tags:
  - lecture
continued_from:
association:
project:
summary:
---
## Learning Outcomes
- Differentiate the four major types of data analytics
	- Descriptive - What happened?
	- Diagnostic - Why did it happen?
	- Predictive - What might happen next?
	- Prescriptive - What should we do about it?
- **Can I use these as a workflow?**
## What is Data Analysis?
- Map the right type of *analytical methods* to the type of analytics being done
- E.g.
	- **Inferential statistics**: how to generalize from a sample to a population
	- **Causal inference**: how to assess a cause-effect relationship and its magnitude
## Data Types
### Measures of Central Tendency

| **Type**                    | **Mode** | **Median** | **Mean** |
| --------------------------- | :------: | :--------: | :------: |
| Dichotomous (logical)       |    x     |            |    x     |
| Categorical                 |    x     |            |          |
| Numerical (interval, ratio) |          |     x      |    x     |
| Ordinal                     |    x     |     x      |          |
| DateTime                    |          |            |          |
- Categorical data can be tricky to summarize.
### Measures of Dispersion
| **Type**                    | **Min/Max** | **Quartiles** | **Range** | **Variance** | **Std Dev** |
| --------------------------- | :---------: | :-----------: | :-------: | :----------: | :---------: |
| Dichotomous (logical)       |             |               |           |              |      x      |
| Categorical                 |             |               |           |              |             |
| Numerical (interval, ratio) |      x      |       x       |     x     |      x       |      x      |
| Ordinal                     |      x      |       x       |           |              |             |
| DateTime                    |      x      |               |     x     |              |             |
## Data Analytics Life Cycle
1. Problem Definition
2. Data Collection
3. Data Preparation
4. Analysis
5. Interpretation
6. Communication
### Emphasis on Cycle
- Rarely move linearly from one step to the next
- Steps 2 and 3 can take most of your time.
- Next week will focus on steps 2-3
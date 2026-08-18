---
name: HAL-QuIC
author: Gage Rowden
date created: 2026-07-01
tags: [project]
abbreviation: GR
status: in-progress
start: 2026-07-01
end:
association: MNPRO
duration: 3 years
funding agency:
funding code:
dg-publish: true
---

## Overview

## Experiments

```dataview
TABLE WITHOUT ID
file.link AS Experiment,
start_date AS Date,
protocols AS Protocols
FROM #experiment WHERE project = this.file.link
SORT Date DESC
```

## Notes

### The Nucleation-dependent Polymerization Model

[See here for original publication](https://pubmed.ncbi.nlm.nih.gov/10326247/)

#### Deriving Elongation $k_{g}$ and Fragmentation $k_{f}$ from Seeded Assays

Spontaneous nucleation $k_{n}$ is highly variable and introduces massive error into mathematical models. To isolate $k_{g}$ and $k_{f}$, biophysicists bypass nucleation entirely by adding a known concentration of pre-formed polymer seeds $P_{0}$ into a solution of native monomer $M_{0}$.

As derived previously, at early time steps where $M(t)\approx M_0$, the system simplifies to:
$$\frac{d^{2}Z}{dt^{2}}=k_{g}k_{f}M_{0}Z$$

The explicit solution for the total mass of polymerized protein $Z(t)$ under these initial conditions is:
$$Z(t)=Z_0\cosh(\kappa t)+\frac{k_gM_0P_0}{\kappa }\sinh (\kappa t)$$

Where $\kappa$ is the effective kinetic propagation constant:
$$\kappa =\sqrt{k_{g}k_{f}M_{0}}$$

**How to calculate $\kappa$ experimentally:**

1. Plot the early exponential growth phase of your polymerization curve $Z$ vs time.
2. Fit the curve to an exponential function: $Z(t) \propto e^{\kappa t}$\.
3. The slope of the natural log of this curve yields the experimental value for $\kappa$.

**Decoupling $k_{g}$ and $k_{f}$:**

Because $/kappa$ is a compound parameter ($\sqrt{k_{g}k_{f}M_{0}}$), you cannot find the individual rates from a single unperturbed growth curve. They must be decoupled using a **monomer-dilution experiment**:

1. Run multiple seeded reactions across a gradient of different initial monomer concentrations $M_0$.
2. Calculate the experimental $\kappa$ for each concentration.
3. Plot $\kappa^{2}$ against $M_0$.
4. The slope of this linear plot gives you the exact combined value of ($k_g \cdot k_f$).

To separate them completely, you must physically vary the fragmentation rate. By altering the mixing speed or sonication power of the assay, $k_f$ scales predictably with mechanical shear stress while $k_g$ remains static. Comparing the growth rate shifts across different shear profiles allows the absolute separation of $k_g$ and $k_f$.

---

#### Deriving the Nucleus Size ($n$) and Nucleation Rate ($k_{n}$)

If you start a reaction with zero pre-formed seeds $P_0 = 0$, the protein must undergo a series of unfavorable monomer-monomer collisions to form a critical nucleus of size $n$.

The initial rate of polymer mass formation directly following the lag phase depends heavily on the initial monomer pool $M_{0}$. By applying a power-law approximation to the initial phase of unseeded reactions, the mass accumulation simplifies to:
$$Z(t)\approx \frac{1}{n+1!}k_{n}k_{g}^{2}M_{0}^{n+2}t^{n+1}$$

Finding the nucleus size $n$\:

To extract the actual number of monomer subunits required to form a stable infectious seed, we take the natural logarithm of both sides:

If you measure the initial rate of polymerization across varying concentrations of native monomer $M_0$ and plot $\ln(\text{Rate})$ vs $\ln(M_0)$, the resulting line has a slope exactly equal to:
$$\text{Slope}=n+2$$

- If the experimental slope is 4, then $n$ = 2 the critical nucleus is a dimer.
- If the experimental slope is 5, then $n$ = 3 the critical nucleus is a trimer.

Calculating $k_n$:

Once the integer size of $n$ is locked in, and $k_g$ has been derived from the seeded assays in Step 1, $k_n$ is the single remaining unknown variable in the power-law equation. It is calculated by solving the intercept of your linear log-log plot.

---

Summary of Parameter Identification

Every constant in the Masel NDP differential equations maps to a specific experimental strategy:

| Rate Constant   | Biophysical Meaning         | Analytical Derivation Method                                                                 |
| --------------- | --------------------------- | -------------------------------------------------------------------------------------------- |
| $\kappa$        | Effective Growth Parameter  | Exponential fitting of early-stage polymer mass accumulation.                                |
| $k_g \cdot k_f$ | Combined Growth/Breakage    | Slope of the linear regression line when plotting $\kappa ^{2}\ vs M_{0}$.                   |
| $n$             | Critical Seed Size          | Scaling exponent calculated from the slope of $\ln(\text{Lag Time})$ vs $\ln(M_0)$.          |
| $k_n$           | Spontaneous Nucleation Rate | Evaluated from the absolute timeline of unseeded lag phases once $n$ and $k_g$ are isolated. |

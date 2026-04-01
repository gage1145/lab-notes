---
name: 2026-03-30 Wolf Lab Meeting
date: 2026-03-30
tags: [meeting]
continued_from: "[[2026-03-23 Wolf Lab Meeting]]"
association: MNPRO
project:
summary:
---

## **Attendees**
- Tiffany
- Veruca
- Miranda
- Caylie
- Sarah
- Marc
- Michelle Schultze
- Gage
- Kristin

## Discussing [this paper](https://www.sciencedirect.com/science/article/pii/S0006320724000107)

### Facilitating effective Collaboration to Prevent Aquatic Invasive Species Spread
### Defining "Risky Boats"

The authors filtered the full boater network down to only _risky_ movements — boats traveling from an infested lake to a lake not yet infested with at least one of the same species. They formalized this with the parameter:

$$h_i=\sum_{k}^{}g_{jk}(1-g_{j'k})$$

where gⱼₖ = 1 if lake j is infested with species k. Any edge where hᵢ ≥ 1 was retained as risky, meaning even the potential to spread just one species was sufficient to flag a boat movement.

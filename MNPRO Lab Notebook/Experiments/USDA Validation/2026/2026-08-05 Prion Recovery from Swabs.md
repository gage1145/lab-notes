---
name: 2026-08-05 Prion Recovery from Swabs
start_date: 2026-08-05
end_date: 2026-08-08
status: in-progress
tags: [experiment]
project: "[[USDA Validation]]"
continued_from:
association: MNPRO
protocols:
  - "[[Oral Swab RT-QuIC]]"
dg-publish: true
---

## Purpose

We have an array of different swabs to test for their ability to obtain and then release prions upon extraction. I will run these alongside a serial dilution of sample 141234 as a standard control to determine the relative recovery via RT-QuIC.

## Design
- Positive sample: 141234 (Undiluted is considered 10$^{-1}$ or 10% or 0.1)
- Swabs:
	- OmniSwab: Qiagen, Cat. No. WB100035
	- PurFlock: Puritan/VWR, 10808-134 (PK)
	- PurSwab: Fisher, Cat. No. 149603E
- Positive sample run from 10$^{-3\rightarrow-7}$; 4 technical replicates
- Swabs tested at 3 biological replicates and 8 technical replicates.
### Procedure
1. Dilute 141234 10-fold in 1X PBS (makes it 10$^{-2}$ or 1% or 0.01)
2. Add 50$\textmu$L of the diluent to the swab in a tube.
3. During extraction, each swab type needs a different amount of PBS added to ensure a sufficient amount of liquid is recovered.
	1. OmniSwab: 425$\textmu$L
	2. PurFlock: 350$\textmu$L
	3. PurSwab: 300$\textmu$L
4. After extraction, add 500$\textmu$L SDS/PBS to the pellet.
This should work out such that (assuming 100% recovery) the resuspension is at a dilution of 10$^{-3}$.
$$
c_1v_1=c_2v_2
$$
$$
[1\%\times50\textmu\text{L}=x\%\times500\textmu\text{L}]\rightarrow[50=500x]\rightarrow{}[x=0.1\%\>\textbf{or}\>0.001\>\textbf{or}\>10^{-3}]
$$

Running this resuspension normally on RT-QuIC, I can then compare it to the equivalent 10$^{-3}$ dilution of the 141234 sample alone.

All swabs tested at a single dilution factor (10$^{-3}$ for the sake of this study).

|       | **1**  | **2**  | **3**  | **4**  | **5**  | **6**  |   **7**   |   **8**   |   **9**   |  **10**  |  **11**  |  **12**  |
| :---: | :----: | :----: | :----: | :----: | :----: | :----: | :-------: | :-------: | :-------: | :------: | :------: | :------: |
| **A** |  P-3   |  P-4   |  P-5   | Omni1  | Omni2  | Omni3  | PurFlock1 | PurFlock2 | PurFlock3 | PurSwab1 | PurSwab2 | PurSwab3 |
| **B** |   \|   |   \|   |   \|   |   \|   |   \|   |   \|   |    \|     |    \|     |    \|     |    \|    |    \|    |    \|    |
| **C** |   \|   |   \|   |   \|   |   \|   |   \|   |   \|   |    \|     |    \|     |    \|     |    \|    |    \|    |    \|    |
| **D** | $\vee$ | $\vee$ | $\vee$ |   \|   |   \|   |   \|   |    \|     |    \|     |    \|     |    \|    |    \|    |    \|    |
| **E** |  P-6   |  P-7   |  N-3   |   \|   |   \|   |   \|   |    \|     |    \|     |    \|     |    \|    |    \|    |    \|    |
| **F** |   \|   |   \|   |   \|   |   \|   |   \|   |   \|   |    \|     |    \|     |    \|     |    \|    |    \|    |    \|    |
| **G** |   \|   |   \|   |   \|   |   \|   |   \|   |   \|   |    \|     |    \|     |    \|     |    \|    |    \|    |    \|    |
| **H** | $\vee$ | $\vee$ | $\vee$ | $\vee$ | $\vee$ | $\vee$ |  $\vee$   |  $\vee$   |  $\vee$   |  $\vee$  |  $\vee$  |  $\vee$  |

## Results
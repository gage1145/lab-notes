---
{"dg-publish":true,"permalink":"/mnpro-lab-notebook/experiments/deer-capture/2026/2026-08-05-prion-recovery-from-swabs/","tags":["experiment"],"dg-note-properties":{"name":"2026-08-05 Prion Recovery from Swabs","start_date":"2026-08-05","end_date":"2026-08-05","status":"in-progress","tags":["experiment"],"project":"[[MNPRO Lab Notebook/Projects/Deer Capture]]","continued_from":null,"association":"MNPRO","protocols":["[[MNPRO Lab Notebook/Protocols/Oral Swab RT-QuIC]]","[[MNPRO Lab Notebook/Protocols/Spiking Swabs with Prions]]"]}}
---


## Purpose

We have an array of different swabs to test for their ability to obtain and then release prions upon extraction. I will run these alongside a serial dilution of sample 141234 as a standard control to determine relative recovery via RT-QuIC.

## Design
- Positive sample: 141234 (undiluted is considered 10$^{-1}$ or 10% or 0.1)
- Swabs:
	- OmniSwab; Qiagen; Cat. No. WB100035
	- PurFlock; VWR; Cat. No. 10808-134 (PK)
	- PurSwab; Fisher; Cat. No. 149603E (These are the ones we use in MNPRO)
- Positive sample tested at 4 reps for standard curve
- Swabs tested in 3 biological replicates and 8 technical replicates
### Procedure
1. Dilute 141234 10-fold in 1X PBS (makes it 10$^{-2}$ or 1% or 0.01)
2. Add 50uL to the swab in tube.
3. After extraction, add 500uL SDS/PBS to pellet.
	- Omni: add 425$\textmu$L PBS to the swab for extraction
	- PurFlock: add 350$\textmu$L PBS
	- PurSwab: add 300$\textmu$L PBS
This should work out such that, assuming 100% recovery, the resuspension should be at 10$^{-3}$.
$$
c_1v_1=c_2v_2
$$
$$
(1\%\times50\textmu\text{L}=x\%\times500\textmu\text{L})\rightarrow(50=500x\%)\rightarrow{}(x=0.1\%\;\text{or}\;0.001\;\text{or}\;10^{-3})
$$

Running this resuspension normally on RT-QuIC, I can then compare it to the equivalent 10$^{-3}$ dilution of the 141234 sample alone.

For the sake of this experiment, the 500$\textmu$L resuspension will be considered 10$^{-3}$. All swabs tested only at this dilution factor.

|       | **1**  | **2**  | **3**  | **4**  | **5**  | **6**  |   **7**    |   **8**    |   **9**    |  **10**   |  **11**   |  **12**   |
| :---: | :----: | :----: | :----: | :----: | :----: | :----: | :--------: | :--------: | :--------: | :-------: | :-------: | :-------: |
| **A** |  P-3   |  P-4   |  P-5   | Omni_1 | Omni_2 | Omni_3 | PurFlock_1 | PurFlock_2 | PurFlock_3 | PurSwab_1 | PurSwab_2 | PurSwab_3 |
| **B** |   \|   |   \|   |   \|   |   \|   |   \|   |   \|   |     \|     |     \|     |     \|     |    \|     |    \|     |    \|     |
| **C** |   \|   |   \|   |   \|   |   \|   |   \|   |   \|   |     \|     |     \|     |     \|     |    \|     |    \|     |    \|     |
| **D** | $\vee$ | $\vee$ | $\vee$ |   \|   |   \|   |   \|   |     \|     |     \|     |     \|     |    \|     |    \|     |    \|     |
| **E** |  P-6   |  P-7   |  N-3   |   \|   |   \|   |   \|   |     \|     |     \|     |     \|     |    \|     |    \|     |    \|     |
| **F** |   \|   |   \|   |   \|   |   \|   |   \|   |   \|   |     \|     |     \|     |     \|     |    \|     |    \|     |    \|     |
| **G** |   \|   |   \|   |   \|   |   \|   |   \|   |   \|   |     \|     |     \|     |     \|     |    \|     |    \|     |    \|     |
| **H** | $\vee$ | $\vee$ | $\vee$ | $\vee$ | $\vee$ | $\vee$ |   $\vee$   |   $\vee$   |   $\vee$   |  $\vee$   |  $\vee$   |  $\vee$   |

## Results
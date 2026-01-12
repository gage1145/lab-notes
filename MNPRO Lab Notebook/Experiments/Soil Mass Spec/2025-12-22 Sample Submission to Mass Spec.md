---
name: 2025-12-22 Sample Submission to Mass Spec
start_date: 2025-12-22
end_date:
status: in-progress
tags: [experiment]
project: "[[Soil Mass Spec]]"
continued_from:
association: MNPRO
protocols:
---

## Purpose

These samples will be submitted to mass spec for a targeted assay. My goal is for this to be both quantitative and qualitative. Quantitative in that I will be submitting a positive sample with a known SD50 (sample 141234) for reference. Qualitative in that I want to know if we can even detect the target within the soil extracts.

## Design
- Samples will be submitted as gel bands.
- Gel bands will need to be de-stained for silver.
- Samples will need to be trypsin digested.
### Reference White-tailed Deer PrP Sequence

```fasta
>QMS79225.1 prion protein [Odocoileus virginianus]
MVKSHIGSWILVLFVAMWSDVGLCKKRPKPGGGWNTGGSRYPGQGSPGGNRYPPQGGGGWGQPHGGGWGQPHGGGWGQPH
GGGWGQPHGGGGWGQGGTHSQWNKPSKPKTNMKHVAGAAAAGAVVGGLGGYMLGSAMSRPLIHFGNDYEDRYYRENMYRY
PNQVYYRPVDQYNNQNTFVHDCVNITVKQHTVTTTTKGENFTETDIKMMERVVEQMCITQYQRESQAYYQRGASVILFSS
PPVILLISFLIFLIVG
```

### Reference Sequences for other Species

```fasta
>AAD13289.1 prion protein, partial [Cervus nippon mantchuricus]
KKRPKPGGGWNTGGSRYPGQGSPGGNRYPPQGGGGWGQPHGGGWGQPHGGGWGQPHGGGWGQPHGGGGWGQGGTHSQWNK
PSKPKTNMKHVAGAAAAGAVVGGLGGYMLGSAMSRPLIHFGNDYEDRYYRENMYRYPNQVYYRPVDQYNNQNTFVHDCVN
ITVKQHTVTTTTKGENFTETDIKMM
>6FNV_A Chain A, Major prion protein [Odocoileus hemionus]
GQGGTHSQWNKPSKPKTNMKHVAGAAAAGAVVGGLGGYMLGSAMSRPLIHFGNDYEDRYYRENMYRYPNQVYYRPVDQYN
NQNTFVHDCVNITVKQHTVTTTTKGENFTETDIKMMERVVEQMCITQYQRESQAYYQRGA
>UXP86346.1 prion protein PrP, partial [Rangifer tarandus]
KTNMKHVAGAAAAGAVVGGLGGYMLGSAMSRPLIHFGNDYEDRYYRENMYRYPNQVYYRPVDQYNNQNTFVHDCVNITVK
QHTVTTTTKGENFTETDIKMMERVVEQMCITQYQRESQAYYQRGASVILFSSP
>QMS79214.1 prion protein, partial [Odocoileus virginianus]
VGLCKKRPKPGGGWNTGGSRYPGQGSPGGNRYPPQGGGGWGQPHGGGWGQPHGGGWGQPHGGGWGQPHGGGGWGQSGTHS
QWNKPSKPKTNMKHVAGAAAAGAVVGGLGGYMLGSAMSRPLIHFGNDYEDRYYRENMYRYPNQVYYRPVDQYNNQNTFVH
DCVNITVKQHTVTTTTKGENFTETDIKMMERVVEQMCITQYQRESQA
>AAF91403.1 prion protein, partial [Ovis aries]
MVKSHIGSWILVLFVAMWSDVGLCKKRPKPGGGWNTGGSRYPGQGSPGGNRYPPQGGGGWGQPHGGGWGQPHGGGWGQPH
GGGWGQPHGGGGWGQGGSHSXWNKPSKPKTNMKHVAGAAAAGAVVGGLGGYMLGSAMSRPLIH
>UVC58669.1 prion protein, partial [Capra hircus]
WILVLFVAMWSDVGLCKKRPKPGGGWNTGGSRYPGQGSPGGNRYPPQGGGGWGQPHGGGWGQPHGGGWGQPHGGGWGQPH
GGGGWGQGGSHSQWNKPSKPKTNMKHVAGAAAAGAVVGGLGGYMLGSAMSRPLIHFGNDYEDRYYRENMYRYPNQVYYRP
VDQYSNQNNFVHDCVNITVKQHTVTTT
>WQH83452.1 prion protein, partial [Connochaetes gnou]
SDVGLCKKRPKPGGGWNTGGSRYPGQGSPGGNRYPPQGGGGWGQPHGGGWGQPHGGGWGQPHGGGWGQPHGGGGWGQGGT
HSQWNKPSKPKTNMKHMAGAAAAGAVVGGLGGYMLGSAMSRPLIHFGNDYEDRYYRENMYRYPNQVYYRPVDQYSNQNNF
VHDCVNITVKQHTVTTTTKGENFTETDIKIMERVVEQMCITQYQRESQAYYQRGASVILFSSP
>AXQ60482.1 prion protein, partial [Naemorhedus griseus]
MVKSHIGSWILVLFVAMWSDVGLCKKRPKPGGGWNTGGSRYPGQGSPGGNRYPPQGGGGWGQPHGGGWGQPHGGGWGQPH
GGGWGQPHGGGGWGQGGSHSQWNKPSKPKTNMKHVAGAAAAGAVVGGLGGYMLGSAMSRPLIHFGNDYEDRYYRENMYRY
PNQVYYRPVDQYSNQNNFVHDCVNITVKQHTVTTTTKGENFTETDIKIMERVVEQMC
>AAD19982.1 prion protein, partial [Tursiops truncatus]
GGNRYPPQGGGGWGQPHGGGWGQPHGGGWGQPHGGGWGQPHGGGGWGQGGGTHNQWKPSKPKTNMKHVAGAAAAGAVVGG
LGGYMLGSAMSRPLIHFGSDYEDRYYRENMYRYPNQVYYRPVDQYNNQNSFVHDCVKITVK
>4KML_A Chain A, Major prion protein [Homo sapiens]
MGSSHHHHHHSSGLVPRGSHMASMTGGQQMGRGKRPKPGGWNTGGSRYPGQGSPGGNRYPPQGGGGWGQPHGGGWGQPHG
GGWGQPHGGGWGQPHGGGWGQGGGTHSQWNKPSKPKTNMKHMAGAAAAGAVVGGLGGYMLGSAMSRPIIHFGSDYEDRYY
RENMHRYPNQVYYRPMDEYSNQNNFVHDCVNITIKQHTVTTTTKGENFTETDVKMMERVVEQMCITQYERESQAYYQRGS
S
```

<div style="page-break-after: always;"></div>
### Peptide Information
#### Peptide 1
- Sequence:\[NH2]GENFTETDI(K)\[COOH]
- Concentration: 5pmol/$\textmu$L
- Molecular weight
	- Calculated: 1161.22 g/mol
	- Experimental: 1161.00 g/mol
- HPLC
	- Column: 250X4.6mm 5u C18 120A
	- Solvent
		- A: 0.05% TFA in water
		- B: 0.05% TFA in ACN
	- Flowrate: 1mL/min

| Peak # | Retention Time (min) | Area % |
| ------ | -------------------- | ------ |
| 1      | 13.739               | 2.791  |
| 2      | 14.827               | 97.209 |

<div style="page-break-after: always;"></div>
#### Peptide 2
- Sequence:\[NH2]YPGQGSPGGN(R)\[COOH]
- Concentration: 5pmol/$\textmu$L
- Molecular weight
	- Calculated: 1099.13 g/mol
	- Experimental: 1100.07 g/mol
- HPLC
	- Column: 150X4.6mm 3.6u C18 120A
	- Solvent
		- A: 0.05% TFA in water
		- B: 0.05% TFA in ACN
	- Flowrate: 1mL/min

| Peak # | Retention Time (min) | Area % |
| ------ | -------------------- | ------ |
| 1      | 10.515               | 2.521  |
| 2      | 10.930               | 97.295 |
| 3      | 11.108               | 0.184  |

<div style="page-break-after: always;"></div>
#### Peptide 3a
- Sequence:\[NH2]VVEQ\[M(O)]\[C(CAM)]ITQY(R)\[COOH]
- Concentration: 5pmol/$\textmu$L
- Molecular weight
	- Calculated: 1452.70 g/mol
	- Experimental: 1452.09 g/mol
- HPLC
	- Column: 150X4.6mm 3.6u C18 120A
	- Solvent
		- A: 0.05% TFA in water
		- B: 0.05% TFA in ACN
	- Flowrate: 1mL/min

| Peak # | Retention Time (min) | Area % |
| ------ | -------------------- | ------ |
| 1      | 12.433               | 0.346  |
| 2      | 12.605               | 1.308  |
| 3      | 12.703               | 97.894 |
| 4      | 12.842               | 0.452  |

<div style="page-break-after: always;"></div>
#### Peptide 3b
- Sequence:\[NH2]VVEQM\[C(CAM)]ITQY(R)\[COOH]
- Concentration: 5pmol/$\textmu$L
- Molecular weight
	- Calculated: 1564.83 g/mol
	- Experimental: 1564.85 g/mol
- HPLC
	- Column: 150X4.6mm 3.6u C18 120A
	- Solvent
		- A: 0.05% TFA in water
		- B: 0.05% TFA in ACN
	- Flowrate: 1mL/min

| Peak # | Retention Time (min) | Area % |
| ------ | -------------------- | ------ |
| 1      | 12.422               | 0.647  |
| 2      | 12.554               | 1.703  |
| 3      | 13.198               | 97.478 |
| 4      | 13.709               | 0.172  |

<div style="page-break-after: always;"></div>
#### Peptide 4
- Sequence:\[NH2]ESQAYYQ(R)\[COOH]
- Concentration: 5pmol/$\textmu$L
- Molecular weight
	- Calculated: 1564.83 g/mol
	- Experimental: 1564.85 g/mol
- HPLC
	- Column: 150X4.6mm 3.6u C18 120A
	- Solvent
		- A: 0.05% TFA in water
		- B: 0.05% TFA in ACN
	- Flowrate: 1mL/min

| Peak # | Retention Time (min) | Area % |
| ------ | -------------------- | ------ |
| 1      | 10.721               | 0.460  |
| 2      | 10.810               | 99.256 |
| 3      | 10.979               | 0.284  |

<div style="page-break-after: always;"></div>
### Positive Sample Information
- 141234
	- SD$_{50}$: 5E$^{10}$/mL
		- Equivalent amount in spike: 2.5E$^8$.
- 1268-P
	- A Minnesota deer lymph node homogenate that might be more representative of the soil extracts.
### Samples to Submit - 36 Total
>[!multi-column]
>>#### Controls
>>- A1
>>- H1
>>- H2
>>- A1 Spiked
>>- H1 Spiked
>>- H2 Spiked
>>- 141234 (spike seed)
>>- 1268-P (MN positive)
>>#### Peptides
>>- 1:  GENFTETDI(K)
>>- 2:  YPGQGSPGGN(R)
>>- 3a: VVEQ\[M(O)]\[C(CAM)]ITQY(R)
>>- 3b: VVEQM\[C(CAM)]ITQY(R)
>>- 4:  ESQAYYQ(R)
>
>>#### Unknowns
>>- MPF 2
>>- 013-S1
>>- 028-N2
>>- GR01
>>- GR04
>>- GR06-CENTER
>>- GR09-CENTER
>>- GR09-N1
>>- GR09-S1
>>- GR10
>>- GR11
>>- PL06-S2
>>- PL06-W2
>>- PL07
>>- PL13-CENTER
>>- PL13-E2
>>- PL13-N1
>>- PL13-W1
>>- PL18-E1
>>- PL18-S1
>>- PL18-S2
>>- PL18-W1
>>- GR01-S3


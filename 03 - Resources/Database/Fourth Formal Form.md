---
tags:
  - 4NF
  - normalization
  - relational_database
  - database
---
---
For more on database normalization, see below:
- Read next: [[Fifth Normal Form]].
- Read previous: [[Third Normal Form]]
- [[Normalization Overview]]
---
**TOC:
- [[#Overview|Overview]]
- [[#1. Consider the example|1. Consider the example]]
- [[#2. The Model_Colors_And_Styles_Available Table|2. The Model_Colors_And_Styles_Available Table]]
- [[#3. The Problem of Data Redundancy|3. The Problem of Data Redundancy]]
- [[#4. Data inconsistency|4. Data inconsistency]]
- [[#5. Why this violates Fourth Normal form|5. Why this violates Fourth Normal form]]
- [[#6. Solution: Decompose the Table|6. Solution: Decompose the Table]]

---

## Overview

**Keynote:** ==Multivalued dependencies in a table must be multivalued dependencies on the key.

## 1. Consider the example

We have a database that stores information about birdhouses, with available colors and styles for each model. The data is structured as follows:
- Tweety
	- Available colors
		- yellow
		- blue
	- Available styles 
		- Bungalow
		- Duplex
- Metro
	- Available colors 
		- Brown
		- Grey
	- Available styles 
		- High-Rise
		- Modular
- Prairie
	- Available colors
		- Brown 
		- Beige
	- Available styles 
		- Bungalow
		- Schoolhouse
## 2. The Model_Colors_And_Styles_Available Table

We store this information in a table called **Model_Colors_And_Styles_Available**:

| Model   | Color  | Style       |
| ------- | ------ | ----------- |
| Tweety  | Yellow | Bungalow    |
| Tweety  | Yellow | Duplex      |
| Tweety  | Blue   | Bungalow    |
| Tweety  | Blue   | Duplex      |
| Metro   | Brown  | High-Rise   |
| Metro   | Brown  | Modular     |
| Metro   | Grey   | High-Rise   |
| Metro   | Grey   | Modular     |
| Prairie | Brown  | Bungalow    |
| Prairie | Brown  | Schoolhouse |
| Prairie | Beige  | Bungalow    |
| Prairie | Beige  | Schoolhouse |
In this table:

- Model, Color, and Style are all key attributes.
- The table does not seem to violate 1NF, 2NF, or 3NF—each non-key attribute fully depends on the key.

## 3. The Problem of Data Redundancy

Now suppose we want to introduce third color for the `Prarie` model, that's green.

This requires us to add two new rows to the table
- One for `Prairie` with `green` and `bungalow`
- One for `Prairie` with `green` and `schoolhouse`

| Model                              | Color                            | Style                                  |
| ---------------------------------- | -------------------------------- | -------------------------------------- |
| Tweety                             | Yellow                           | Bungalow                               |
| Tweety                             | Yellow                           | Duplex                                 |
| Tweety                             | Blue                             | Bungalow                               |
| Tweety                             | Blue                             | Duplex                                 |
| Metro                              | Brown                            | High-Rise                              |
| Metro                              | Brown                            | Modular                                |
| Metro                              | Grey                             | High-Rise                              |
| Metro                              | Grey                             | Modular                                |
| Prairie                            | Brown                            | Bungalow                               |
| Prairie                            | Brown                            | Schoolhouse                            |
| Prairie                            | Beige                            | Bungalow                               |
| Prairie                            | Beige                            | Schoolhouse                            |
| <font color="green">Prairie</font> | <font color="green">Green</font> | <font color="green">Bungalow</font>    |
| <font color="green">Prairie</font> | <font color="green">Green</font> | <font color="green">Schoolhouse</font> |
## 4. Data inconsistency

If we mistakenly add only one row for `Prairie` with `Green` and `Bungalow`, but fail to add the row for `Green` and `Schoolhouse`, we introduce a data inconsistency.

In this case, we're missing important information about the fact that `Prairie` with `Green` is also available in the `Schoolhouse` style. This happens because the table is storing two independent facts (available colors and available styles) in the same place, which leads to redundancy and potential inconsistency.

## 5. Why this violates Fourth Normal form

The table appears to be normalized up to Third Normal Form. However, it violates **Fourth Normal Form (4NF)** because there are multivalued dependency between attributes that are independent of each other:
- Model → Colors
- Model → Styles

In other words, the available colors for a model are independent of the available styles, but we are storing them together in the same table. This causes redundancy, leading to potential inconsistencies. That's why every combination of `Color` and `Styles` for a specific model must be listed separately

## 6. Solution: Decompose the Table

To bring the design into **Fourth Normal Form** and eliminate the multivalued dependency, we can split the table into two separate tables: one for available colors, and one for available styles:

1. Model_Colors table

| Model   | Color  |
| ------- | ------ |
| Tweety  | Yellow |
| Tweety  | Blue   |
| Metro   | Brown  |
| Metro   | Grey   |
| Prairie | Brown  |
| Prairie | Beige  |
| Prairie | Green  |

2. Model_Styles table

| Model   | Style       |
| ------- | ----------- |
| Tweety  | Bungalow    |
| Tweety  | Duplex      |
| Metro   | High-Rise   |
| Metro   | Modular     |
| Prairie | Bungalow    |
| Prairie | Schoolhouse |

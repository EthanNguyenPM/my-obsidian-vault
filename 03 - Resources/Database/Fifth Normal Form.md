---
tags:
  - 5NF
  - relational_database
  - database
  - normalization
  - resources
---
---
**Table of Content**

- [1. What is Fifth Normal Form (5NF)?](#1-what-is-fifth-normal-form-5nf)
- [2. Example of a 5NF Violation](#2-example-of-a-5nf-violation)
- [3. Potential redundancy](#3-potential-redundancy)
- [4. Decomposition into 5NF](#4-decomposition-into-5nf)
- [5. Problem: Spurious tuples on Join](#5-problem-spurious-tuples-on-join)
- [6. Why does this violate 5NF](#6-why-does-this-violate-5nf)
- [7. Correct design](#7-correct-design)

---
## 1. What is Fifth Normal Form (5NF)?

Fifth Normal Form (5NF), also known as Projection-Join Normal Form (PJNF), deals with cases where data redundancy is caused by join dependencies

A table is in 5NF
- ==If it cannot be decomposed into any number of smaller tables without loss of information (i.e., without introducing spurious tuples
- ==If the decomposition can be achieved using only natural joins

## 2. Example of a 5NF Violation

Let’s consider a scenario where we have a table that stores information about consultants, clients, and the skills that consultants possess, which are relevant to particular clients.

Table: Consultant_Client_Skill

| Consultant | Client  | Skill  |
| ---------- | ------- | ------ |
| Alice      | ClientA | Java   |
| Alice      | ClientB | Java   |
| Alice      | ClientA | Python |
| Bob        | ClientA | Python |
| Bob        | ClientB | Python |
| Bob        | ClientB | Java   |
This table captures the fact that:
- Alice has `Java` and `Python` skills, and she works with `ClientA` and `ClientB`
- Bob has `Java` and `Python` skills, and he works with `ClientA` and `ClientB`
## 3. Potential redundancy

At the first glance, it might seem that the table is normalized, but it could have redundant information or spurious tuples due to certain complex relationships between `Consultants` `Clients` and `Skills`.

For example, let's say that:
- **Alice** can offer `Java` and `Python` skills to `ClientA`.
- Alice can only offer `Java` to `ClientB`.
- Bob can offer `Python` and `Java` to `ClientA` and `ClientB`

This relationship is complex and cannot be represented efficiently in the current table without redundancy.

## 4. Decomposition into 5NF

If we decompose the table into three smaller tables representing the relationship between each pair of entitie[[Normalization]]s:
- Consultant-Client
- Client-Skill
- Consultant-Skill

We might get the following:

Table 1: Consultant-Client

| Consultant | Client  |
| ---------- | ------- |
| Alice      | ClientA |
| Alice      | ClientB |
| Bob        | ClientA |
| Bob        | ClientB |

Table 2: Client-Skill

| Client  | Skill  |
| ------- | ------ |
| ClientA | Java   |
| ClientA | Python |
| ClientB | Java   |
| ClientB | Python |

Table 3: Consultant-Skill

| Consultant | Skill  |
| ---------- | ------ |
| Alice      | Java   |
| Alice      | Python |
| Bob        | Java   |
| Bob        | Python |

## 5. Problem: Spurious tuples on Join

If we try to join these tables back together, we would get the spurious tuples which is a combination of `Consultant` `Client` and `Skill` that did not exist in the original table.

For example, joining the decomposed table would imply that `Alice` can offer both `Java` and `Python` to `ClientA` because:
- Table 1 says `Alice ` works with `ClientA`.
- Table 2 says `ClientA` needs both `Java` and `Python`.
- Table 3 says `Alice` knows `Java` and `Python`

However, we know from the original data that `Alice` can only offer `Java` to `ClientA`, not `Python`. This is a spurious tuple, resulting from incorrect join of decomposed tables.

## 6. Why does this violate 5NF

This violates 5NF because when we decompose the original data into smaller tables and try to join them back together, we get incorrect and redundant data. The decomposition creates spurious tuples which did not exist in original table, meaning the join dependency cannot be properly preserved.

In 5NF, the decomposition just only occur if the original table can be reconstructed by joining the smaller tables without introducing spurious tuples. 

## 7. Correct design

To correct this and ensure the table is in 5NF, we need to acknowledge the complex join dependency between the three entities (Consultant, Client, and Skill). The original table should not be decomposed in a way that loses the relationship between all three attributes.

Thus, to preserve the information accurately without spurious tuples, the original table should remain as it is

---
For more on database normalization, see below:
- Read previous: [[Fourth Formal Form]]
- [[Normalization Overview]]
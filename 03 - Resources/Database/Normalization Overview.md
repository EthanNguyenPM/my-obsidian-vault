---
tags:
  - normalization
  - relational_database
  - database
  - resources
---
---
** Table of Content**

- [Definition](#definition)
- [How we determine the table is normalized or not](#how-we-determine-the-table-is-normalized-or-not)

---
## Definition

**Database normalization** is the process of organizing data in a relational database to minimize redundancy and ensure data integrity. This is done by structuring the data into tables and applying specific rules, known as *normal forms* (NF). Each normal form incrementally reduces redundancy and improves the logical organization of the data.

**Normalized tables are**:
- Easier to understand. 
- Easier to enhance and extend.
- Protected from:
	- Insertion anomalies.
	- Update anomalies.
	- Deletion anomalies.

## How we determine the table is normalized or not

How we can determine the dangerous and redundant data could creep into the tables. There are set of `criteria` that we could use to assess level of danger:
 1. [[First Normal Form]].
 2. [[Second Normal Form]].
 3. [[Third Normal Form]].
 4. [[Fourth Formal Form]].
 5. [[Fifth Normal Form]].
---
tags:
  - 1NF
  - database
  - normalization
  - relational_database
  - resources
---
---
**Table of Content**

- [1. Using row order to convey information violates 1NF](#1-using-row-order-to-convey-information-violates-1nf)
- [2. Mixing data types within same column violates 1NF](#2-mixing-data-types-within-same-column-violates-1nf)
- [3. A Table without primary key violates 1NF](#3-a-table-without-primary-key-violates-1nf)
- [4. Storing a repeating group of data items on a single row violates 1NF](#4-storing-a-repeating-group-of-data-items-on-a-single-row-violates-1nf)

---
## 1. Using row order to convey information violates 1NF

***Example***: We want to show the members of the Beatles from tallest to shortest.

**Table before 1NF**, we show the data from tallest to shortest based on row order to convey the information. The first name in the table will be the tallest, the last name in the table is the one shortest

| member_of_Beatle |
| ---------------- |
| Paul             |
| John             |
| George           |
| Ringo            |
**Table after 1NF**, Instead of using row order to show the tallest to shortest members of Beatles. We create another column to convey this meaning.

| member_of_Beatles | Beatles_Height_Ranking |
| ----------------- | ---------------------- |
| George            | 178                    |
| John              | 179                    |
| Ringo             | 170                    |
| Paul              | 180                    |

## 2. Mixing data types within same column violates 1NF

Each column in a table should contain a consistent data type, and it should not allow any other types to ensure the integrity of the database

**Table before 1NF**:


| Beatles | Height_In_Cm                                           |
| ------- | ------------------------------------------------------ |
| George  | 178                                                    |
| John    | 179                                                    |
| Ringo   | <font color="red">Somewhere between 168 and 171</font> |
| Paul    | 180                                                    |

**Table after 1NF**:

| Beatles | Height_In_Cm |
| ------- | ------------ |
| George  | 178          |
| John    | 179          |
| Ringo   | 170          |
| Paul    | 180          |
## 3. A Table without primary key violates 1NF

A table must define a primary key to ensure each record is unique and to prevent redundant data. If it doesn't, it's not qualified for 1NF

| Beatles                           | Height_In_Cm                     |
| --------------------------------- | -------------------------------- |
| George                            | 178                              |
| <font color="red">~~John~~</font> | <font color="red">~~179~~</font> |
| <font color="red">~~John~~</font> | <font color="red">~~170~~</font> |
| Ringo                             | 170                              |
| Paul                              | 180                              |

## 4. Storing a repeating group of data items on a single row violates 1NF

**Table before 1NF**

| Player_ID | Inventory                                     |
| --------- | --------------------------------------------- |
| jdog21    | 2 amulets, 4 rings                            |
| gila19   | 18 copper coins                               |
| trev73    | 3 shields, 5 arrows, 30 copper coins, 7 rings |
**Table after 1NF**

| Player_ID | Item_Type    | Item_Quantity |
| --------- | ------------ | ------------- |
| jdog21    | amulets      | 2             |
| jdog21    | rings        | 4             |
| gila19    | copper coins | 18            |
| trev73    | shields      | 3             |
| trev73    | arrows       | 5             |
| trev73    | copper coins | 30            |
| trev73    | rings        | 7             |

---
For more on database normalization, see below:
- Read next: [[Second Normal Form]]
- [[Normalization Overview]]
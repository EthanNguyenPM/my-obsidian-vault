## What is normalization

### Definition

**Database normalization** is the process of organizing data in a relational database to minimize redundancy and ensure data integrity. This is done by structuring the data into tables and applying specific rules, known as *normal forms* (NF). Each normal form incrementally reduces redundancy and improves the logical organization of the data.

**Normalized tables are**:
- Easier to understand. 
- Easier to enhance and extend.
- Protected from:
	- Insertion anomalies.
	- Update anomalies.
	- Deletion anomalies.

### How we determine the table is normalized or not

How we can determine the dangerous and redundant data could creep into the tables. There are set of `criteria` that we could use to assess level of danger:
	1. First normal form.
	2. Second normal form.
	3. Third normal form.
	4. Forth normal form.
	5. Fifth normal form.

#### First normal form

**All rules**:
- [[#1. Using row order to convey information violates 1NF]]
- [[#2. Mixing data types within same column violates 1NF]]
- [[#3. A Table without primary key violates 1NF]]

##### 1. Using row order to convey information violates 1NF

***Example***: We want to show the members of the Beatles from tallest to shortest.

**Table before 1NF**, we show the data from tallest to shortest based on row order to convey the information. The first name in the table will be the tallest, the last name in the table is the one shortest

| member_of_Beatle |
| ---------------- |
| Paul             |
| John             |
| George           |
| Ringo            |
**Table after 1NF**, Instead of using row order to show the tallest to shortest members of Beatles. We create an another column to convey this meaning.

| member_of_Beatles | Beatles_Height_Ranking |
| ----------------- | ---------------------- |
| George            | 178                    |
| John              | 179                    |
| Ringo             | 170                    |
| Paul              | 180                    |

##### 2. Mixing data types within same column violates 1NF

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
##### 3. A Table without primary key violates 1NF

A table must define a primary key to ensure each record is unique and to prevent redundant data. If it doesn't, it's not qualified for 1NF

| Beatles                           | Height_In_Cm                     |
| --------------------------------- | -------------------------------- |
| George                            | 178                              |
| <font color="red">~~John~~</font> | <font color="red">~~179~~</font> |
| <font color="red">~~John~~</font> | <font color="red">~~170~~</font> |
| Ringo                             | 170                              |
| Paul                              | 180                              |

##### 4. Repeating group


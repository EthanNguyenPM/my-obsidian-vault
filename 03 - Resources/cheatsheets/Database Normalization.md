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
	4. Fourth normal form.
	5. Fifth normal form.

#### First normal form

**All rules**:
- [[#1. Using row order to convey information violates 1NF]]
- [[#2. Mixing data types within same column violates 1NF]]
- [[#3. A Table without primary key violates 1NF]]
- [[#4. Storing a repeating group of data items on a single row violates 1NF]]

##### 1. Using row order to convey information violates 1NF

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

##### 4. Storing a repeating group of data items on a single row violates 1NF

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
| gila19   | copper coins | 18            |
| trev73    | shields      | 3             |
| trev73    | arrows       | 5             |
| trev73    | copper coins | 30            |
| trev73    | rings        | 7             |

#### Second normal form

**Look at the `Player_Inventory` table below**

| Player_ID | Item_Type    | Item_Quantity | Player_Rating |
| --------- | ------------ | ------------- | ------------- |
| jdog21    | amulets      | 2             | Intermediate   |
| jdog21    | rings        | 4             | Intermediate  |
| gila19   | copper coins | 18            | Beginner      |
| trev73    | shields      | 3             | Advanced      |
| trev73    | arrows       | 5             | Advanced      |
| trev73    | copper coins | 30            | Advanced      |
| trev73    | rings        | 7             | Advanced      |

This table is not in **Second Normal Form (2NF)**. In 2NF, each non-key attribute must depend on the entire primary key. Here, the primary key is a composite key consisting of Player_ID and Item_Type. However, Player_Rating only depends on Player_ID and not on Item_Type, which causes several anomalies.

Now, consider the following scenarios:
##### **1. Deletion Anomaly**

When we attempt to delete the row for player `gila19`, who has 18 copper coins, we inadvertently remove all their information including their status as a beginner. This illustrates a ==deletion anomaly==, where the removal of a single data entry results in the loss of essential information about the player.

| Player_ID                       | Item_Type        | Item_Quantity | Player_Rating                     |
| ------------------------------- | ---------------- | ------------- | --------------------------------- |
| jdog21                          | amulets          | 2             | Advanced                          |
| jdog21                          | rings            | 4             | Intermediate                      |
| ~~gila19~~                     | ~~copper coins~~ | ~~18~~        | ~~Beginner~~                      |
| trev73                          | shields          | 3             | Advanced                          |
| trev73                          | arrows           | 5             | Advanced                          |
| trev73                          | copper coins     | 30            | Advanced                          |
| trev73                          | rings            | 7             | Advanced                          |
| <font color="red">tina42</font> |                  |               | <font color="red">Beginner</font> |

##### **2. Update Anomaly**

Suppose player `jdog21` improves their rating from Intermediate to Advanced. To reflect this, we update both of their records. However, if the update goes wrong and only one of the records is updated, `jdog21` will appear to have both *Intermediate* and *Advanced* ratings simultaneously. This is called an **update anomaly** and demonstrates how our table design allows for logical inconsistencies.

##### **3. Insertion Anomaly**

Now, consider a new player, `tina42`, who is a *Beginner* but has no items in her inventory yet. Since our table requires an item to be recorded, we cannot insert a row for `tina42` without an inventory item. This illustrates an **insertion anomaly**, where the inability to insert incomplete data leads to missing information in this case, her player rating.

##### **4. Violating 2NF: Non-Key Attributes Must Depend on the Entire Primary Key

At this point, it’s clear that the design went wrong because the Player_Rating column does not belong in this table.

>The fact that Player_Rating is a property of the player, and not of their inventory, should have helped us realize that a player is an important concept in its own right. Therefore, a player deserves their own table.

To fix this, we should create a separate table to store player information, including their rating. This way, Player_Rating will depend solely on Player_ID.

##### **5. Corrected Design

###### 5.1. Player Table

| Player_ID | Player_Rating |
| --------- | ------------- |
| jdog21    | Intermediate  |
| gila19    | Beginner      |
| trev73    | Advanced      |
| tin41     | Beginner      |

###### 5.2. Player_Inventory Table

| Player_ID | Item_Type    | Item_Quantity |
| --------- | ------------ | ------------- |
| jdog21    | amulets      | 2             |
| jdog21    | rings        | 4             |
| gila19   | copper coins | 18            |
| trev73    | shields      | 3             |
| trev73    | arrows       | 5             |
| trev73    | copper coins | 30            |
| trev73    | rings        | 7             |

#### Third Normal Form

**Keynote**: ==Every non-key attribute in a table should depend on the key, the whole key, and nothing but the key.==

In a multiplayer game, players have a skill level on a nine-point scale. At one extreme, a player with skill level 1 is a complete beginner, while a player with skill level 9 is the most skillful. We define the relationship between skill levels and player ratings as follows:

- Skill levels [1, 2, 3] → Beginner
- Skill levels [4, 5, 6] → Intermediate
- Skill levels [7, 8, 9] → Advanced

Consider the Player table below:

| Player_ID | Player_Rating | Player_Skill_Level |
| --------- | ------------- | ------------------ |
| jdog21    | Intermediate  | 4                  |
| gila19    | Beginner      | 3                  |
| trev73    | Advanced      | 8                  |
| tin41     | Beginner      | 1                  |

##### 1. The Problem: Update Anomaly

Now that both `Player_Rating` and `Player_Skill_Level` exist in the *Player* table, a problem can occur. For example, if gila19 levels up from skill level 3 to skill level 4, both the `Player_Rating` and `Player_Skill_Level` columns need to be updated.

However, if only one column is updated (say, the Player_Skill_Level), then gila19 will have inconsistent data showing as a Beginner with a skill level of 4, which should correspond to Intermediate instead. This inconsistency happens because:

>	Player_Rating depends on Player_Skill_Level, which in turn depends on the primary key Player_ID.

##### 2. The Cause: Transitive Dependency

According to **Second Normal Form (2NF)**, the table seems to be normalized because both Player_Rating and Player_Skill_Level depend on the primary key Player_ID. However, the issue arises from a transitive dependency.

- `Player_ID` → `Player_Skill_Level`
- `Player_Skill_Level` → `Player_Rating`

Here, `Player_Rating` depends on `Player_Skill_Level`, which is a non-key attribute. This violates **Third Normal Form (3NF)**, which forbids any non-key attribute (like `Player_Rating`) from depending on another non-key attribute (like `Player_Skill_Level`).

##### 3. Solution: Remove Transitive Dependency

To bring the table into **Third Normal Form (3NF)**, we can remove the transitive dependency by creating a separate table for Player_Rating and Player_Skill_Level. This ensures that each non-key attribute depends only on the primary key.

###### 1. Player table

| Player_ID | Player_Skill_Level |
| --------- | ------------------ |
| jdog21    | 4                  |
| gila19    | 3                  |
| trev73    | 8                  |
| tin41     | 1                  |

###### 2. Player_Skill_Level table

| Player_Skill_Level | Player_Rating |
| ------------------ | ------------- |
| 1                  | Beginner      |
| 2                  | Beginner      |
| 3                  | Beginner      |
| 4                  | Intermediate  |
| 5                  | Intermediate  |
| 6                  | Intermediate  |
| 7                  | Advanced      |
| 8                  | Advanced      |
| 9                  | Advanced      |

#### Fourth Normal form

**Keynote:** ==Multivalued dependencies in a table must be multivalued dependencies on the key.

##### 1. Consider the example

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
##### 2. The Model_Colors_And_Styles_Available Table

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

##### 3. The Problem of Data Redundancy

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
##### 4. Data inconsistency

If we mistakenly add only one row for `Prairie` with `Green` and `Bungalow`, but fail to add the row for `Green` and `Schoolhouse`, we introduce a data inconsistency.

In this case, we're missing important information about the fact that `Prairie` with `Green` is also available in the `Schoolhouse` style. This happens because the table is storing two independent facts (available colors and available styles) in the same place, which leads to redundancy and potential inconsistency.

##### 5. Why this violates Fourth Normal form

The table appears to be normalized up to Third Normal Form. However, it violates **Fourth Normal Form (4NF)** because there are multivalued dependency between attributes that are independent of each other:
- Model → Colors
- Model → Styles

In other words, the available colors for a model are independent of the available styles, but we are storing them together in the same table. This causes redundancy, leading to potential inconsistencies. That's why every combination of `Color` and `Styles` for a specific model must be listed separately

##### 6. Solution: Decompose the Table

To bring the design into **Fourth Normal Form** and eliminate the multivalued dependency, we can split the table into two separate tables: one for available colors, and one for available styles:

###### 6.1 Model_Colors table

| Model   | Color  |
| ------- | ------ |
| Tweety  | Yellow |
| Tweety  | Blue   |
| Metro   | Brown  |
| Metro   | Grey   |
| Prairie | Brown  |
| Prairie | Beige  |
| Prairie | Green  |

###### 6.2 Model_Styles table

| Model   | Style       |
| ------- | ----------- |
| Tweety  | Bungalow    |
| Tweety  | Duplex      |
| Metro   | High-Rise   |
| Metro   | Modular     |
| Prairie | Bungalow    |
| Prairie | Schoolhouse |

#### Fifth normal form

##### 1. What is Fifth Normal Form (5NF)?

Fifth Normal Form (5NF), also known as Projection-Join Normal Form (PJNF), deals with cases where data redundancy is caused by join dependencies

A table is in 5NF
- ==If it cannot be decomposed into any number of smaller tables without loss of information (i.e., without introducing spurious tuples
- ==If the decomposition can be achieved using only natural joins

##### 2. Example of a 5NF Violation

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
##### 3. Potential redundancy

At the first glance, it might seem that the table is normalized, but it could have redundant information or spurious tuples due to certain complex relationships between `Consultants` `Clients` and `Skills`.

For example, let's say that:
- **Alice** can offer `Java` and `Python` skills to `ClientA`.
- Alice can only offer `Java` to `ClientB`.
- Bob can offer `Python` and `Java` to `ClientA` and `ClientB`

This relationship is complex and cannot be represented efficiently in the current table without redundancy.

##### 4. Decomposition into 5NF

If we decompose the table into three smaller tables representing the relationship between each pair of entities:
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

##### 5. Problem: Spurious tuples on Join

If we try to join these tables back together, we would get the spurious tuples which is a combination of `Consultant` `Client` and `Skill` that did not exist in the original table.

For example, joining the decomposed table would imply that `Alice` can offer both `Java` and `Python` to `ClientA` because:
- Table 1 says `Alice ` works with `ClientA`.
- Table 2 says `ClientA` needs both `Java` and `Python`.
- Table 3 says `Alice` knows `Java` and `Python`

However, we know from the original data that `Alice` can only offer `Java` to `ClientA`, not `Python`. This is a spurious tuple, resulting from incorrect join of decomposed tables.

##### 6. Why does this violate 5NF

This violates 5NF because when we decompose the original data into smaller tables and try to join them back together, we get incorrect and redundant data. The decomposition creates spurious tuples which did not exist in original table, meaning the join dependency cannot be properly preserved.

In 5NF, the decomposition just only occur if the original table can be reconstructed by joining the smaller tables without introducing spurious tuples. 

##### 7. Correct design

To correct this and ensure the table is in 5NF, we need to acknowledge the complex join dependency between the three entities (Consultant, Client, and Skill). The original table should not be decomposed in a way that loses the relationship between all three attributes.

Thus, to preserve the information accurately without spurious tuples, the original table should remain as it is
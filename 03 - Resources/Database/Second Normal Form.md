---
tags:
  - 2NF
  - database
  - normalization
  - relational_database
  - resources
---
---
For more on database normalization, see below:
- Read next: [[Third Normal Form]]
- Read previous: [[First Normal Form]]
- [[Normalization Overview]]
---
**TOC**:
- [[#Example|Example]]
- [[#1. Deletion Anomaly|1. Deletion Anomaly]]
- [[#2. Update Anomaly|2. Update Anomaly]]
- [[#3. Insertion Anomaly|3. Insertion Anomaly]]
- [[#4. Violating 2NF: Non-Key Attributes Must Depend on the Entire Primary Key|4. Violating 2NF: Non-Key Attributes Must Depend on the Entire Primary Key]]
- [[#5. Corrected Design|5. Corrected Design]]
	- [[#5. Corrected Design#5.1. Player Table|5.1. Player Table]]
	- [[#5. Corrected Design#5.2. Player_Inventory Table|5.2. Player_Inventory Table]]

---
## Example

**Look at the `Player_Inventory` table below**

| Player_ID | Item_Type    | Item_Quantity | Player_Rating |
| --------- | ------------ | ------------- | ------------- |
| jdog21    | amulets      | 2             | Intermediate  |
| jdog21    | rings        | 4             | Intermediate  |
| gila19    | copper coins | 18            | Beginner      |
| trev73    | shields      | 3             | Advanced      |
| trev73    | arrows       | 5             | Advanced      |
| trev73    | copper coins | 30            | Advanced      |
| trev73    | rings        | 7             | Advanced      |

This table is not in **Second Normal Form (2NF)**. In 2NF, each non-key attribute must depend on the entire primary key. Here, the primary key is a composite key consisting of Player_ID and Item_Type. However, Player_Rating only depends on Player_ID and not on Item_Type, which causes several anomalies.

Now, consider the following scenarios:
## 1. Deletion Anomaly

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

## 2. Update Anomaly

Suppose player `jdog21` improves their rating from Intermediate to Advanced. To reflect this, we update both of their records. However, if the update goes wrong and only one of the records is updated, `jdog21` will appear to have both *Intermediate* and *Advanced* ratings simultaneously. This is called an **update anomaly** and demonstrates how our table design allows for logical inconsistencies.

## 3. Insertion Anomaly

Now, consider a new player, `tina42`, who is a *Beginner* but has no items in her inventory yet. Since our table requires an item to be recorded, we cannot insert a row for `tina42` without an inventory item. This illustrates an **insertion anomaly**, where the inability to insert incomplete data leads to missing information in this case, her player rating.

## 4. Violating 2NF: Non-Key Attributes Must Depend on the Entire Primary Key

At this point, it’s clear that the design went wrong because the Player_Rating column does not belong in this table.

>The fact that Player_Rating is a property of the player, and not of their inventory, should have helped us realize that a player is an important concept in its own right. Therefore, a player deserves their own table.

To fix this, we should create a separate table to store player information, including their rating. This way, Player_Rating will depend solely on Player_ID.

## 5. Corrected Design

### 5.1. Player Table

| Player_ID | Player_Rating |
| --------- | ------------- |
| jdog21    | Intermediate  |
| gila19    | Beginner      |
| trev73    | Advanced      |
| tin41     | Beginner      |

### 5.2. Player_Inventory Table

| Player_ID | Item_Type    | Item_Quantity |
| --------- | ------------ | ------------- |
| jdog21    | amulets      | 2             |
| jdog21    | rings        | 4             |
| gila19   | copper coins | 18            |
| trev73    | shields      | 3             |
| trev73    | arrows       | 5             |
| trev73    | copper coins | 30            |
| trev73    | rings        | 7             |

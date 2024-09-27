---
tags:
  - 3NF
  - database
  - normalization
  - relational_database
---
---
For more on database normalization, see below:
- Read next: [[Fourth Formal Form]].
- Read previous: [[Second Normal Form]]
- [[Normalization Overview]]
---
**TOC**:
- [[#Overview|Overview]]
- [[#1. The Problem: Update Anomaly|1. The Problem: Update Anomaly]]
- [[#2. The Cause: Transitive Dependency|2. The Cause: Transitive Dependency]]
- [[#3. Solution: Remove Transitive Dependency|3. Solution: Remove Transitive Dependency]]

---
## Overview

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

## 1. The Problem: Update Anomaly

Now that both `Player_Rating` and `Player_Skill_Level` exist in the *Player* table, a problem can occur. For example, if gila19 levels up from skill level 3 to skill level 4, both the `Player_Rating` and `Player_Skill_Level` columns need to be updated.

However, if only one column is updated (say, the Player_Skill_Level), then gila19 will have inconsistent data showing as a Beginner with a skill level of 4, which should correspond to Intermediate instead. This inconsistency happens because:

>	Player_Rating depends on Player_Skill_Level, which in turn depends on the primary key Player_ID.

## 2. The Cause: Transitive Dependency

According to **Second Normal Form (2NF)**, the table seems to be normalized because both Player_Rating and Player_Skill_Level depend on the primary key Player_ID. However, the issue arises from a transitive dependency.

- `Player_ID` → `Player_Skill_Level`
- `Player_Skill_Level` → `Player_Rating`

Here, `Player_Rating` depends on `Player_Skill_Level`, which is a non-key attribute. This violates **Third Normal Form (3NF)**, which forbids any non-key attribute (like `Player_Rating`) from depending on another non-key attribute (like `Player_Skill_Level`).

## 3. Solution: Remove Transitive Dependency

To bring the table into **Third Normal Form (3NF)**, we can remove the transitive dependency by creating a separate table for Player_Rating and Player_Skill_Level. This ensures that each non-key attribute depends only on the primary key.

1. Player table

| Player_ID | Player_Skill_Level |
| --------- | ------------------ |
| jdog21    | 4                  |
| gila19    | 3                  |
| trev73    | 8                  |
| tin41     | 1                  |

2. Player_Skill_Level table

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


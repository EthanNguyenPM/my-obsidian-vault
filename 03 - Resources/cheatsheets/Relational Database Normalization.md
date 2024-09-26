### Database Normalization

**Database normalization** is the process of organizing data in a relational database to minimize redundancy and ensure data integrity. This is done by structuring the data into tables and applying specific rules, known as *normal forms* (NF). Each normal form incrementally reduces redundancy and improves the logical organization of the data.

---

### Normal Forms (1NF to 5NF) with Examples

#### 1. **First Normal Form (1NF)**

- **Rule:** Ensure that each column contains atomic (indivisible) values, and there are no repeating groups or arrays.
  
##### Example Before 1NF (Non-Atomic Values):

| CustomerID | CustomerName | PhoneNumbers   |
| ---------- | ------------ | -------------- |
| 1          | Alice        | 123456, 654321 |
| 2          | Bob          | 789012         |

- **Issue:** The `PhoneNumbers` column contains multiple values (non-atomic).

##### Example After 1NF (Atomic Values):

| CustomerID | CustomerName | PhoneNumber |
|------------|--------------|-------------|
| 1          | Alice        | 123456      |
| 1          | Alice        | 654321      |
| 2          | Bob          | 789012      |

- **Solution:** Each phone number is placed in a separate row, ensuring atomic values.

---

#### 2. **Second Normal Form (2NF)**

- **Rule:** Ensure that all non-key attributes are fully dependent on the primary key. Eliminate partial dependencies.
  
##### Example Before 2NF (Partial Dependencies):

| StudentID | CourseID | StudentName | CourseName |
|-----------|----------|-------------|------------|
| 1         | 101      | Alice       | Math       |
| 2         | 102      | Bob         | Science    |

- **Issue:** `StudentName` depends only on `StudentID`, and `CourseName` depends only on `CourseID`. This causes partial dependency.

##### Example After 2NF:

**Student Table:**

| StudentID | StudentName |
|-----------|-------------|
| 1         | Alice       |
| 2         | Bob         |

**Course Table:**

| CourseID | CourseName |
|----------|------------|
| 101      | Math       |
| 102      | Science    |

**Enrollment Table (Bridge Table):**

| StudentID | CourseID |
|-----------|----------|
| 1         | 101      |
| 2         | 102      |

- **Solution:** The `StudentName` and `CourseName` are moved to separate tables, leaving the `Enrollment` table with only primary keys.

---

#### 3. **Third Normal Form (3NF)**

- **Rule:** Remove transitive dependencies, i.e., non-key columns should only depend on the primary key.
  
##### Example Before 3NF (Transitive Dependency):

| EmployeeID | EmployeeName | DepartmentID | DepartmentName |
|------------|--------------|--------------|----------------|
| 1          | Alice        | D001         | HR             |
| 2          | Bob          | D002         | IT             |

- **Issue:** `DepartmentName` depends on `DepartmentID`, which is not the primary key, but is dependent on `EmployeeID`.

##### Example After 3NF:

**Employee Table:**

| EmployeeID | EmployeeName | DepartmentID |
|------------|--------------|--------------|
| 1          | Alice        | D001         |
| 2          | Bob          | D002         |

**Department Table:**

| DepartmentID | DepartmentName |
|--------------|----------------|
| D001         | HR             |
| D002         | IT             |

- **Solution:** The `DepartmentName` is moved to a separate `Department` table.

---

#### 4. **Boyce-Codd Normal Form (BCNF)**

- **Rule:** A stricter version of 3NF, ensuring that for every functional dependency, the determinant is a candidate key.
  
##### Example Before BCNF:

| ProfessorID | CourseID | DepartmentID |
|-------------|----------|--------------|
| 1           | 101      | D001         |
| 2           | 102      | D001         |

- **Issue:** `CourseID` determines `DepartmentID`, but `CourseID` is not a candidate key.

##### Example After BCNF:

**Course Table:**

| CourseID | DepartmentID |
|----------|--------------|
| 101      | D001         |
| 102      | D001         |

**Professor Table:**

| ProfessorID | CourseID |
|-------------|----------|
| 1           | 101      |
| 2           | 102      |

- **Solution:** The functional dependency of `CourseID → DepartmentID` is moved to its own table.

---

#### 5. **Fourth Normal Form (4NF)**

- **Rule:** Eliminate multi-valued dependencies, where one attribute can have multiple independent values.
  
##### Example Before 4NF (Multivalued Dependency):

| AuthorID | BookTitle | Publisher  |
|----------|-----------|------------|
| 1        | Book A    | Publisher1 |
| 1        | Book A    | Publisher2 |

- **Issue:** The author can have multiple publishers for a single book, leading to redundancy.

##### Example After 4NF:

**AuthorBook Table:**

| AuthorID | BookTitle |
|----------|-----------|
| 1        | Book A    |

**BookPublisher Table:**

| BookTitle | Publisher  |
|-----------|------------|
| Book A    | Publisher1 |
| Book A    | Publisher2 |

- **Solution:** The `AuthorBook` and `BookPublisher` relationships are separated into different tables.

---

#### 6. **Fifth Normal Form (5NF)**

- **Rule:** Ensure that data is decomposed in such a way that no redundancy is reintroduced through join operations.
  
##### Example Before 5NF:

| ProjectID | EmployeeID | Skill       |
|-----------|------------|-------------|
| 1         | 100        | Design      |
| 1         | 200        | Development |

- **Issue:** ProjectID and EmployeeID have a many-to-many relationship with skills, leading to potential redundancy.

##### Example After 5NF:

**ProjectEmployee Table:**

| ProjectID | EmployeeID |
|-----------|------------|
| 1         | 100        |
| 1         | 200        |

**EmployeeSkill Table:**

| EmployeeID | Skill       |
|------------|-------------|
| 100        | Design      |
| 200        | Development |

- **Solution:** The relationships between `Project`, `Employee`, and `Skill` are decomposed into separate tables to avoid redundancy.

---

### Conclusion

By progressing through the normal forms (1NF to 5NF), we reduce redundancy, improve data integrity, and ensure efficient database operations. While normalization helps in organizing data, it's important to balance it according to the needs of the application, as overly normalized databases might require complex queries involving multiple table joins.
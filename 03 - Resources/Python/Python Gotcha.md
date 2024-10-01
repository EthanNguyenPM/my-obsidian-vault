---
tags:
  - python
  - resources
---
---
**TOC:**
- [[#1. A Python Gotcha|1. A Python Gotcha]]
- [[#2. Mutables and Functions|2. Mutables and Functions]]
- [[#3. The None Workaround|3. The None Workaround]]
---

Learn about a common python gotcha when using mutable default arguments in functions

## 1. A Python Gotcha

When writing a function with default arguments, it can be sometimes attempting to include an empty list as a default argument to that function.

Let's imagine for instance we were building an application for a school. We want to have a function that can generate new students and return a dictionary of the student's age, name, and grades. Since most students enter to school without grades. It's plausible to assume we can store an empty list for the property. Here is what our function might look like:

```python
def createStudent(name, age, grades=[]):
	return {
		"name": name,
		"age": age,
		"grades": grades
	}
```

Looks good so far! We can create two new students based of this code (Assuming they have no grades yet):

```python
chrisney = createStudent("Chrisney", 15)
dallas = createStudent("Dallas", 16)
```

Realistically, as `Chrisney` and `Dallas` progress in school. There should be a way for us to add new grades. Something like this method:

```python
def addGrade(student, grade):
	student["grades"].append(grade)
	print(student["grades"])
```

Alright! Let's give `Chrisney` and `Dallas` some grades:

```python
addGrade(chrisney, 90)
addGrade(dallas, 100)
```

Here, we expect that the output probably would be:

```python
[90]
[100]
```

That would make sense since we want each student to have individual grades list. Surprisingly, the actual output is:

```python
[90]
[90, 100]
```

Uh oh! That doesn't look right. Why does `Dallas` have the `90` grade that we added to `Chrisney`, when they should only have the `100` grade we intended to add? This is known as a ==gotcha==

## 2. Mutables and Functions

To understand this gotcha, we must first establish what Python classifies as mutable. A mutable object refers to various containers in Python that are intended to be changed.
- Mutable: 
	- Lists
	- Dictionaries
	- Sets
	- User-defined objects
- Immutable:
	- Tuples
	- Strings
	- Frozensets
	- Integers
	- Floats
	- Booleans
	
When using a mutable in function arguments, it’s important to note the following ([from the offical documentation](https://docs.python.org/3/reference/compound_stmts.html#function-definitions)):

>Default parameter values are evaluated from left to right when the function definition is executed. This means that the expression is evaluated once, when the function is defined, and that the same “pre-computed” value is used for each call.

This mean that when we call a function, the default values we provide for parameters are created once, and used for each subsequent call of the function. On the other word, our `grades=[]` from our earlier function was only created once and anytime we tried to access it, the same list was being modified.

## 3. The None Workaround

If we want to use empty list as a potential default argument, we can use `None` as a special value to indicate we did not receive anything. After we check whether an argument was provided, we can instantiate a new list if it wasn't. Here is what the solution looks like for our program from earlier:

```python
def createStudent(name, age, grades=None):
	if grades is None:
		grades = []
	return {
		"name": name,
		"age": age,
		"grades": grades
	}
```

Now if we create our students again and add grades to them:

```python
chrisley = createStudent('Chrisley', 15)
dallas = createStudent('Dallas', 16)

addGrade(chrisley, 90)
addGrade(dallas, 100)
```

We would get our expected result:

```python
[90]
[100]
```
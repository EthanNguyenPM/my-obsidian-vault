---
tags:
  - resources
  - python
---
## Learn how to define a Python in one line

In Python, Lambda function (also commonly called an anonymous function) is a one-line shorthand for function.

Let's start by examining how lambda functions compare to the normal function that we have been writing so far.

Take for example, a function called `add_two()`:

```python
def add_two(my_input):
	return my_input+2
```

The same function could be written as a Lambda function:

```python
add_two = lambda my_input: my_input + 2
```

Let's break this syntax down:
1. The function is stored in a variable called `add_two`.
2. The `lambda` keyword declares that this is a lambda function (similar to how we use `def` to declare a normal function).
3. `my_input` is a parameter used to hold value passed to `add_two`.
4.  In the Lambda function version, we are returning `my_input + 2` without the use of a `return` keyword (the normal function explicitly uses the keyword `return`) 

Our `lambda function` can be more complex than the above example. For instance, let's say we want a function that will perform differently based on different inputs.

Let's say that we have a function `check_if_A_grade` that outputs `Got an A` if a grade is at least 90, and otherwise says you `Did not get an A`. So, the code:

```python
print(check_if_A_grade(91))
print(check_if_A_grade(70))
print(check_if_A_grade(20))
```

Would output:

```python
'Got an A!'
'Did not get an A.'
'Did not get an A.'
```

We can do this using a conditional `if` statement in a lambda function, with syntax that looks like this:

```python
check_if_A_grade = lambda grade: "Got an A" if grade >= 90 else "Did not get an A."
```

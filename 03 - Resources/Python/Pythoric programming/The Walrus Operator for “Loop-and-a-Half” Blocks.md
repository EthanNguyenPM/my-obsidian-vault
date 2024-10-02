---
tags:
  - resources
  - pythonic
---
## Overview

A pattern that Python programmers - programmers in many other programming languages - have often used has always been just slightly ugly. This is [[Loop-and-a-half pattern]]. In fact, a number of languages have been designed with, or later grown, a construct like do … while or repeat … until specifically to avoid exactly this minor wart. For example, the following code uses the same mysterious get_data() and predicate() functions from the previous sections.

Old-style loop-and-a-half in Python

```python
val = get_data()
while not predicate(val):
	print("Current value acceptable:", val)
	val = get_data()
```

The repetition of the assignment to `val` both before the loop and within the loop body just feels slightly wrong from a stylistic and code-clarify perspective (although, it’s not an actual mistake).

A probably even less aesthetically pleasing variant on this pattern is to use break within the body to avoid the repetition.

```python
while True:
	val = get_data()
	if predicate(val):
		break
	print("Current value acceptable:", val)
```

Since Python 3.8, we’ve had the option of using the so-called `walrus operator` to simplify this structure. The operator is fancifully named for its *resemblance to an emoticon of a walrus with eyes and tusks*. The walrus operator `:=` allows you to assign a value within an expression rather than only as a statement.

```python
while not predicate(val := get_data()):
	print("Current value acceptable:", val)
```

In both cases where the predicate is inside the while statement, the loop might be entered as few as zero times. With a while True, the loop is always entered at least once, but it might terminate early (the “and-a-half”) if some condition occurs.

Using the walrus operator within an if statement is very similar in both providing a value and perhaps not running the suite based on that value.

An if suite without and with inline initialization

```python
val = get_data()
if val:
	print("Current value acceptable:", val)
```

Current value acceptable: 247

```python
if val := get_data():
	print("Current value acceptable:", val)
```

Current value acceptable: 848
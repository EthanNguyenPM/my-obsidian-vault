---
tags:
  - resources
  - python
  - pattern
---
## Definition

The loop-and-a-half pattern is a programming idiom that involves using a loop to iterate over a sequence of elements, but with a twist: the loop has an extra iteration at the end, which is often used to handle special case or to perform some additional processing. 

## Example

```python
arr = [1, 2, 3, 4, 5]

i = 0
while i < len(arr):
	print(arr[i])	
	i += 1

	if i == len(arr):
		print("Reached the end of an array")
		break
```

In this example, the loop iterates over the elements of the array, but the last iteration is special: it checks if we've reached the end of the array and prints a message if so.

The loop-and-a-half pattern is often used in situation where:
1. We need to perform some additional processing after the loop finishes iterating over the elements of array.
2. we need to handle some special cases or edge condition that requires extra attention.
3. we want to avoid using separate loop or conditional statement to handle the special case.

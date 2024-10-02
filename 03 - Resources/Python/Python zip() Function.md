---
tags:
  - resources
---
## Definition

The `zip()` function in Python is used to combine elements from multiple iterables (such as lists, tuples, etc.) into tuples. It returns an iterator of tuples, where the i-th tuple contains the i-th elements from each of the input iterables.

## Syntax

```python
zip(*iterables)
```

iterables: One or more iterable objects (e.g., lists, tuples, strings).

## How It Works

The zip() function takes one or more iterables and pairs elements together based on their positions. If the iterables are of unequal length, zip() stops creating tuples when the shortest iterable is exhausted.

Example with Lists

```python
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
zipped = zip(list1, list2)
print(list(zipped))
```

Output:

```css
[(1, 'a'), (2, 'b'), (3, 'c')]
```

## Example with Tuples

``` python
tuple1 = (1, 2, 3)
tuple2 = ('x', 'y', 'z')
zipped = zip(tuple1, tuple2)
print(list(zipped))
```

Output:

```css
[(1, 'x'), (2, 'y'), (3, 'z')]
```

## Unzipping

You can also "unzip" a zipped object back into individual lists or tuples using the * operator.
Example of Unzipping

```python
zipped = zip([1, 2, 3], ['a', 'b', 'c'])
list1, list2 = zip(*zipped)
print(list1)
print(list2)
```

Output:

```arduino
(1, 2, 3)
('a', 'b', 'c')
```

## Handling Unequal Length Iterables

When the iterables passed to zip() are of different lengths, it will only process elements until the shortest iterable is exhausted.
Example:

```python
list1 = [1, 2]
list2 = ['a', 'b', 'c']
zipped = zip(list1, list2)
print(list(zipped))
```

Output:

```css
[(1, 'a'), (2, 'b')]
```

## Using zip() with for Loops

You can also use zip() in a for loop to iterate over multiple iterables in parallel.

Example:

```python
names = ['John', 'Jane', 'Doe']
ages = [25, 28, 22]

for name, age in zip(names, ages):
    print(f'{name} is {age} years old.')
```

Output:

```csharp
John is 25 years old.
Jane is 28 years old.
Doe is 22 years old.
```

## Summary

> - `zip()` is useful when you want to loop through multiple iterables in parallel.
> - It returns an iterator of tuples, combining elements based on their index positions.
> - Stops creating tuples when the shortest iterable is exhausted.
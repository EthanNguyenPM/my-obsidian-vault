---
tags:
  - area
  - python
---
## Overview

In Python, **bitwise operators** are used to perform operations on binary representations of integers. These operators work at the level of individual bits and are useful in tasks that involve low-level programming, like working with binary data, encryption, and performance optimization.

Here's a breakdown of the bitwise operators in Python:

## 1. **Bitwise AND (`&`)**

Performs a logical **AND** operation on each pair of corresponding bits of two numbers. The result is `1` only if both bits are `1`.

```python
a = 5  # (binary: 101)
b = 3  # (binary: 011)

result = a & b  # (binary: 001) => 1
print(result)   # Output: 1
```

## 2. **Bitwise OR (`|`)**

Performs a logical **OR** on each pair of corresponding bits of two numbers. The result is `1` if at least one of the bits is `1`.

```python
a = 5  # (binary: 101)
b = 3  # (binary: 011)

result = a | b  # (binary: 111) => 7
print(result)   # Output: 7
```

## 3. **Bitwise XOR (`^`)**

Performs a **XOR** (exclusive OR) on each pair of corresponding bits of two numbers. The result is `1` only if the bits are different.

```python
a = 5  # (binary: 101)
b = 3  # (binary: 011)

result = a ^ b  # (binary: 110) => 6
print(result)   # Output: 6
```

## 4. **Bitwise NOT (`~`)**

Performs a **NOT** operation, which inverts all the bits of the number (changes `0` to `1` and `1` to `0`). In Python, this operation is equivalent to `-x - 1`.

```python
a = 5  # (binary: 101)

result = ~a  # (binary: ...11111010) => -6
print(result) # Output: -6
```

> **Note:** Python integers are of arbitrary precision, so the result of `~a` reflects the two’s complement representation of the negative number.

## 5. **Bitwise Left Shift (`<<`)**

Shifts the bits of the number to the left by a specified number of positions, filling the rightmost bits with zeros. This is equivalent to multiplying the number by `2` raised to the power of the shift amount.

```python
a = 5  # (binary: 101)

result = a << 1  # (binary: 1010) => 10
print(result)    # Output: 10
```

## 6. **Bitwise Right Shift (`>>`)**

Shifts the bits of the number to the right by a specified number of positions, discarding the rightmost bits. This is equivalent to integer division by `2` raised to the power of the shift amount.

```python
a = 5  # (binary: 101)

result = a >> 1  # (binary: 10) => 2
print(result)    # Output: 2
```

## Summary of Bitwise Operators

| Operator | Description                      | Example                 |
|----------|----------------------------------|-------------------------|
| `&`      | Bitwise AND                      | `5 & 3  # 1`            |
| `|`      | Bitwise OR                       | `5 | 3  # 7`            |
| `^`      | Bitwise XOR                      | `5 ^ 3  # 6`            |
| `~`      | Bitwise NOT                      | `~5    # -6`            |
| `<<`     | Left Shift                       | `5 << 1 # 10`           |
| `>>`     | Right Shift                      | `5 >> 1 # 2`            |

## Practical Example: Checking Odd or Even with Bitwise AND

You can use the bitwise AND operator to quickly check if a number is even or odd:

```python
def is_even(n):
    return (n & 1) == 0

print(is_even(4))  # True (even)
print(is_even(7))  # False (odd)
```

Here, `(n & 1)` checks if the least significant bit is `0` (even) or `1` (odd).

## Conclusion

Bitwise operators are powerful tools in Python for manipulating individual bits of data. They are especially useful in performance-critical applications, such as encoding, compression, and cryptography.
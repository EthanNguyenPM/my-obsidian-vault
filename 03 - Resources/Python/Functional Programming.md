---
tags:
  - resources
---
## Introduction to functional programming

**Functional programming** is a programming paradigm in which code is structured primarily in the form of functions. The origins of this programming style arise from a branch of mathematics known as _lambda calculus_, which is the study of functions and their mathematical properties. In contrast to the popular object-oriented and procedural approaches, functional programming offers a different way of thinking when solving a problem.

Let’s explore how to program solutions in a functional style using [Python](https://www.codecademy.com/resources/docs/python).

## Functional vs. object-oriented programming

In **object-oriented programming (OOP)**, you structure your code based on the concept of objects. In commonly used OOP languages (such as Java or C#), we create a template for an object using the keyword `class`, and we instantiate an object by using the keyword `new`. These objects contain fields that store data and methods that manipulate data. In this style, an object can be passed as an argument in the function of another object.

In functional programming, you create a solution by structuring code mainly using functions. Functions are “first-class citizens” in this paradigm, meaning we can use them to store and manipulate data (with limitations). Similar to objects in object-oriented programming, in functional programming, functions can be passed in as arguments to other functions and can be returned by other functions.

## Declarative vs. imperative programming

Before we learn of the advantages functional programming offers, we must first discuss the differences between an _imperative paradigm_ and a _declarative paradigm_.

**Imperative programming** solves a problem by describing the step-by-step solution. Imperative programming is concerned with “how to solve a problem.”

In contrast, **declarative programming** relies on the underlying framework or programming language to solve a problem. The programmer’s only task is to describe what problem they would like solved. Declarative programming is concerned with “what problem to solve.”

As an analogy, consider the example of obtaining a cup of coffee. Imperative programming would be the equivalent of you making the cup of coffee yourself by performing the following steps:

- Take out your coffee pot.
- Load the pot with the coffee grounds.
- Add water to the coffee pot.
- Place the coffee pot on the stove.
- Turn stove on.
- Wait until coffee is done.
- Pour coffee into a cup.
- Do you like sugar?
    - If yes, add sugar.
    - If no, do not add sugar.
- Drink coffee.

Declarative programming is the equivalent of going to your local coffee shop and telling the barista, “I’d like a cup of coffee with one teaspoon of sugar, please.” The barista prepares your coffee, gives you the cup, and you drink it without concerning yourself with the details of how it was made.

For a programming analogy, consider the example of having to sort a list in Python. Imperatively sorting the list would be you implementing a sorting algorithm like this:

```python
lst = [8, 4, 14, 9, 12, 5, 7, 1, 10, 2, 3]
# Sort using Selection Sort algorithm
for i in range(len(lst)):  
	min_idx = i  
	for j in range(i+1, len(lst)):    
		min_idx = j if lst[j] < lst[min_idx] else min_idx  
	temp = lst[i]
	lst[i] = lst[min_idx]  
	lst[min_idx] = temp
```

If we were to solve the list declaratively in Python, we would call the `list.sort()` function like so:

```python
lst = [8, 4, 14, 9, 12, 5, 7, 1, 10, 2, 3]
list.sort(lst)
```

Which style a programmer follows might depend on their goals. If you are looking for concise code that gets you an answer efficiently, you might go with a more declarative approach. If you are working with other people and want to ensure that your code is easy to follow, you may choose a more imperative style.

OOP and procedural programming follow an imperative approach; functional programming follows a declarative approach.

![[Pasted image 20241010004613.png]]
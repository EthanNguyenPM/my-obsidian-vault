---
tags:
  - resources
  - python
---
## Introduction

In this article, we are going to talk about the following topics:
- Sequential Programming
- Concurrency and Parallelism
- Asynchronous Programming
- threading, multiprocessing, and asyncio modules

## Sequential Programming

As you have gone along your Python journey, you have most likely worked with *sequential programs*. These are programs that follow a set order of instructions. We can view this on the following diagram:

sequential programming diagram

For example, if we have the following program:

```python
for i in range(4):
  print(i)
print("end program")
```

we will see the numbers 0-3 printed in order as the program follows the sequence of events:

```python
print(0)
print(1)
print(2)
print(3)
print("end program")
```

Great! We have a deterministic algorithm that suits our needs. However, in this program, we have four steps that do not take a long time. Let’s imagine we are a data scientist working on a complex learning model or a backend developer working with an extensive database. Suddenly, we are dealing with many more steps that take a lot more processing power.

In situations like this, the concepts of concurrent programming and parallel programming come into play. To give us a basic intuition behind each of these paradigms, let’s picture three separate scenarios of ordering food at a deli.
Analogies

## Analogies

We can view sequential programming as a line of customers with access to one register. In this scenario, each customer has to wait in a single-file line until they can make their order. This is fine if there are only a few customers. However, as the number of customers piles up, this can be incredibly inefficient for the deli.

We can view concurrent programming as multiple lines of customers with access to one register. In this model, we might have three separate lines. The cashier can pick one of the customers who is ready to order from the front of a line. This can speed up ordering for the deli as if a customer decides they are not quite ready to order yet, they can let one of the other people in the front of the line go ahead.

We can view parallel programming as multiple lines of customers with access to multiple registers. In this model, there are multiple registers that can divvy up the customers. This way, the deli is more likely to avoid long lines and run a more efficient operation.

Finally, we can also have asynchronous programs. If we add this paradigm to our analogy, we can view it as having a wait queue where each customer has a ticket. Once a customer’s food is ready, their ticket gets called. However, the tickets don’t necessarily get called in order; instead, any ticket can be called once the customer’s food is ready. Sequential (synchronous) would mean that customers would have to wait for each customer before them to get their food.

## Defining Technical Terms

Now that we have some high-level understanding of these concepts, let’s get back to programming mode and develop technical definitions for these terms.

- Concurrency is the process in which we have multiple tasks running and completing during overlapping periods of time.
- Parallelism is the process in which we simultaneously have multiple tasks or separate parts of the same task running using multiple CPUs (core processing units). These definitions seem quite similar; however, we should identify some key difference between the two processes:

- Parallelism needs hardware with multiple processing units, whereas concurrency only utilizes one.
- Concurrency requires at least two tasks to exist whereas parallelism only requires one.
- Parallelism assigns each task for a core to execute, whereas concurrency executes all tasks by switching tasks simultaneously.
- Parallelism means we can do multiple things at once, while concurrency means we can juggle between tasks. ![[Pasted image 20241010161252.png]]These diagrams should remind us of our deli line analogy from before. Think of each processing unit as a register and each task as a line. With one core, we can split up the tasks cleverly to speed up the runtime. With multiple cores, we can run those tasks at the same time.

## Methods in Python

In Python, we are going to go over the following libraries:

- `threading`
- `multiprocessing`
- `asyncio`

Using these, we can create concurrent, parallel, and asynchronous programs that are much faster than synchronous ones.

We can map these libraries one-to-one as:

- `threading` –> concurrency
- `multiprocessing` –> parallelism
- `asyncio` –> asynchronous

In the next few lessons, we will learn about the concepts of threads and processes. Then we will see how to use these concepts to create powerful and efficient programs and see our conceptual understanding of concurrency, parallelism, and asynchronous programming come to life!
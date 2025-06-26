---
tags:
  - resources
  - python
---
## Introduction

So far, we have seen what concurrent programming is and learned about processes and threads. Now we are going to apply our knowledge of these concepts using Python! In this lesson, we are going to learn about three modules:

- [`threading`](https://www.codecademy.com/resources/docs/python/threading)    
- `asyncio`
- `multiprocessing`

These [modules](https://www.codecademy.com/resources/docs/python/modules) can help speed up programs and provide design clarity. We will walk through what they are and practice writing short programs with them. Along the way, think back to the previous article and lesson you read. Make sure you understand the connection between these modules and the concepts we have covered already.

## Sequential Programming

Much of this lesson will involve comparing the efficiency and behavior of sequential programming with concurrent programming.

In script below, you should see a sequential program with a timer. We will use the timer throughout this lesson to track how long each program takes to run.

After you have looked over the code a bit.

```python
import time


def sequential():
    s = time.perf_counter()
    print("Codecademy")
    time.sleep(2)
    print("says hello!")
    elapsed = time.perf_counter() - s
    print("Sequential Programming Elapsed Time: " + str(elapsed) + " seconds")


sequential()
```

## The Threading Module

Now let’s see how we can speed up our Python programs with the threading module!

To review, a thread is a unique flow of execution. Theoretically, multiple threads mean the ability to run multiple things at the same time. However, in Python, threads do not actually run simultaneously; they merely appear to do so. Still, we will find that threading can increase the speed of our program. Generally, threading will perform much better than sequential programming if tasks within your program spend a lot of time waiting for external events to occur.

To create a thread instance in Python, we use the following code:

```python
import threading

example_thread = threading.Thread(target=some_function, args=(some_arg,))
```

The two main parameters we will focus on are:

- `target`: this is the function you want to execute with thread(s). It defaults to `None`.
- `args`: this is the argument or set of arguments applied to the target function. It is a tuple and defaults to `None`.

For example, let’s say we wanted to apply a thread to the function called `analyze_list()` with arguments `l1, l2, l3`. We would use the following code:

```python
t = threading.Thread(target=analyze_list, args=(l1, l2, l3))
```

After creating our thread instance, we also have to “start” our thread using `.start()`. Therefore, to make sure `t` executes on Run, we write:

```python
t.start()
```

Example as so:

```python
import time
import threading


def greeting_with_sleep(string):
    s = time.perf_counter()
    print(string)
    time.sleep(2)
    print("says hello!")
    elapsed = time.perf_counter() - s
    print("Sequential Programming Elapsed Time: " + str(elapsed) + " seconds")


t = threading.Thread(target=greeting_with_sleep, args=("Codecademy",))
t.start()
```

## Multiple Threads

We have seen how to create a thread in Python; however, we didn’t see any speed or efficiency benefits in our previous example.

To see the benefits of threading, let’s learn how to create multiple threads and test them out in our example.

When creating multiple threads throughout this course, we will use one of the following approaches:

```python
# create each thread
t1 = threading.Thread(target=target_function, args=(arg1,))
t2 = threading.Thread(target=target_function, args=(arg2,))
t3 = threading.Thread(target=target_function, args=(arg3,))
# start each thread
t1.start()
t2.start()
t3.start()
```

or

```python
threads = []
# list of arguments to use
args = [arg1, arg2, arg3]
# iterate through the length of arguments
for i in range(len(args)):
  # create thread
  t = threading.Thread(target=target_function, args=(args[i],))
  # add thread to threads list
  threads.append(t)
  # start thread
  t.start()
```

The benefit of the second approach is that it keeps track of our threads in a list called threads. In the next exercise, we will see why this is helpful. Therefore, we will follow this approach going forward. 

Full example is shown below:

```python
import time
import threading
def greeting_with_sleep(string):
  print(string)
  time.sleep(2)
  print("says hello!")


def main_threading():
  s = time.perf_counter()
  greetings = ['Codecademy', 'Chelsea', 'Hisham', 'Ashley']
  # your code goes here
  for greeting in greetings:
    t = threading.Thread(target=greeting_with_sleep, args=(greeting,))
    t.start()

  elapsed = time.perf_counter() - s
  print("Threading Elapsed Time: " + str(elapsed) + " seconds")

main_threading()
```

## Joining a Thread

In the previous exercise, we started working with multiple threads and noticed some interesting behavior. We will investigate this behavior more with the `.join()` threading method.

We can use `.join()` to tell one thread to wait for this thread to stop before moving on. Let’s see how we implement this and then try it out in our previous example.

We use `.join()` after each thread has already been initiated.

```python
t1.join()t2.join()t3.join()
```

Or:

```python
for t in threads:
  t.join()
```

The second approach is much easier for keeping track of our threads and is much more efficient if we have numerous.

## The Asyncio Module

Now we will cover another concurrent programming model: the asyncio module.

The asyncio module uses async/await syntax. async and await are two [keywords](https://www.codecademy.com/resources/docs/python/keywords) that allow you to build and execute asynchronous code in your programs.

The async keyword declares a function as a coroutine. Coroutines are [functions](https://www.codecademy.com/resources/docs/python/functions) that may return normally with a value or may suspend themselves internally and return a continuation. This is a fancy way of saying they allow tasks to be paused and resumed to mimic multitasking. This is conceptually very similar to what we saw with threads! Coroutines are at the heart of asynchronous programs in Python.

The await keyword suspends execution of the current task until whatever is being “await”ed on is completed. For example, if we have an “await function task2” within a coroutine “task1” this tells Python “Suspend task1 until task2 is completed.”

Let’s apply this to some real examples and see how we declare asynchronous functions in Python. The following code block defines hello_async(), prints “hello”, waits three seconds, and prints “how are you?”.

```python
import time
import asyncio


async def greeting_with_sleep_async(string):
    s = time.perf_counter()
    print(string)
    await asyncio.sleep(2)
    print("says hello!")
    elapsed = time.perf_counter() - s
    print("Asyncio Elapsed Time: " + str(elapsed) + " seconds")


loop = asyncio.get_event_loop()
loop.run_until_complete(greeting_with_sleep_async("Codecademy"))
```

## Multiple Asynchronous Tasks

Let’s use our knowledge of `async/await` syntax to do some complicated tasks.

If we wanted to run multiple tasks, we can do a setup that is similar to how we created multiple threads. Let’s walk through the following code:

```python
async def main():
    tasks = [task1(arg1), task2(arg2), task3(arg3)]
    await asyncio.gather(*tasks)
```

Breaking this down, we define `main()` as a coroutine function. `tasks` is a list of separate function calls. Note that each of `task1()`, `task2()`, and `task3()` are each coroutine [functions](https://www.codecademy.com/resources/docs/python/functions). The next line is where the magic happens. `asyncio.gather()` groups all of our tasks together and allows them to be run concurrently. You can read more about it [here](https://docs.python.org/3/library/asyncio-task.html#running-tasks-concurrently). It is given the `await` syntax. Finally, `*tasks` unpacks the `tasks` [lists](https://www.codecademy.com/resources/docs/python/lists).

Full example is shown below:

```python
import time
import asyncio


async def greeting_with_sleep_async(string):
    print(string)
    await asyncio.sleep(2)
    print(string + " says hello!")


async def main_async():
    s = time.perf_counter()
    greetings = [
        greeting_with_sleep_async("Codecademy"),
        greeting_with_sleep_async("Chelsea"),
        greeting_with_sleep_async("Hisham"),
        greeting_with_sleep_async("Ashley"),
    ]
    # your code goes here
    await asyncio.gather(*greetings)

    elapsed = time.perf_counter() - s
    print("Asyncio Elapsed Time: " + str(elapsed) + " seconds")


loop = asyncio.get_event_loop()
loop.run_until_complete(main_async())
```

## The Multiprocessing Module

We are onto our final Python module, `multiprocessing`. This module is unique from [`threading`](https://www.codecademy.com/resources/docs/python/threading) and `asyncio` in that allows the user to leverage multiple processors on a given machine simultaneously. This is because instead of threads or asynchronous tasks, `multiprocessing` is powered by subprocesses.

Implementation will look very similar to how we approached the `threading` module.

To create a process in Python, we do the following:

```python
import multiprocessing

p = multiprocessing.Process(target=target_function, args=(arg,))
```

This might look familiar as the arguments are identical. `target` is the function we execute with the process and `args` is the argument or set of arguments used in the function.

Also identical to the threading module, to start the process, we use:

```python
p.start()
```

Full example is shown below:

```python
import time
import multiprocessing


def greeting_with_sleep(string):
    s = time.perf_counter()
    print(string)
    time.sleep(2)
    print("says hello!")
    elapsed = time.perf_counter() - s
    print("Multiprocessing Elapsed Time: " + str(elapsed) + " seconds")


p = multiprocessing.Process(target=greeting_with_sleep, args=("Codecademy",))
p.start()
```


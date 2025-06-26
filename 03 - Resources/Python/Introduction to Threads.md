---
tags:
  - resources
  - python
---
While a process is an abstract data structure that represents all of the necessary information to run a program, a _thread_ represents the actual sequence of processor instructions that are actively being executed.

Each process contains at least one thread to be able to execute, although more can be created to allow for concurrent processing if it is supported by the CPU. These threads live within the process and share all of the common resources available to it, such as memory pages and active

Preview: Docs Loading link description

[files](https://www.codecademy.com/resources/docs/python/files)

, as shown in the image to the right.

These shared resources are critical for the definition of a thread. While each process is typically independent, multiple threads usually work together within the context of a process. By sharing data directly, there is faster communication and context switching between threads than what is possible for processes, all while taking fewer system resources.

For example, within a video game process, multiple threads may exist to manage separate services relating to the operation of the game, such as one thread for collecting user inputs and another for producing sounds. As these threads live within the same process, they can easily share information about the game, such as the type of ground the player is walking on. This can be used to affect both the speed the character moves from the input thread as well as the noises created by the sound thread.

![[Pasted image 20241010205241.png]]
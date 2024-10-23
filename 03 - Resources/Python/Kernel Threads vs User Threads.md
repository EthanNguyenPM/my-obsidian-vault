---
tags:
  - resources
---
Threads can behave differently depending on the environment they are created in.

A thread built into the existing process is considered a _kernel thread_. This means that the kernel within the operating system is fully aware of these threads and directly manages their execution.

There are also _user threads_ that exist solely in userspace and, while functionally identical, are not known or controlled by the kernel. This allows for more fine-grained control by developers. These threads are even more efficient than their kernel counterparts as they save on the costly indirection of making a system call to constantly interact with the kernel.

While these user threads typically operate independently of the kernel, they do need to be mapped to existing kernel threads in order to have the operating system execute them. There are three common models for mapping user threads to kernel threads, as shown in the image to the right:

- **1:1 Kernel-level threading** for a simple implementation that best allows for hardware acceleration provided by the kernel threads.
    
- **N:1 User-level threading** for ultra-light threads that can quickly communicate and context switch, but do not benefit from hardware acceleration due to sharing the same kernel thread.
    
- **M:N Hybrid threading** to get the best of both of the above solutions: very light and fast threads that can be hardware accelerated as necessary. However, this complex implementation can lead to bugs such as priority inversion where less important tasks are mistakenly prioritized and run first.

![[Pasted image 20241010212131.png]]
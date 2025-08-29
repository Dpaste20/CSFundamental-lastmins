// src/data/osQuestions.ts
import type { Question } from '../types';

export const osQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary role of an Operating System?",
    options: [
      "To manage computer hardware and software resources",
      "To provide a user interface",
      "To provide services for applications and programmers",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "An Operating System (OS) is the core software that acts as an intermediary between the computer hardware and the user. It manages all the hardware and software resources, provides a platform for other software to run, and offers a user interface to interact with the system."
  },
  {
    id: 2,
    question: "Which of the following is the core component of an Operating System?",
    options: [
      "Shell",
      "Kernel",
      "API",
      "System Programs"
    ],
    correctAnswer: 1,
    explanation: "The kernel is the central and most fundamental part of an operating system. It has complete control over everything in the system and is responsible for managing the CPU, memory, and peripherals."
  },
  {
    id: 3,
    question: "The mode in which the operating system has unrestricted access to hardware is known as?",
    options: [
      "User Mode",
      "Kernel Mode",
      "Supervisor Mode",
      "Both b and c"
    ],
    correctAnswer: 3,
    explanation: "Kernel Mode, also known as Supervisor Mode, is a privileged mode where the OS has direct access to all hardware and memory in the system. User applications run in User Mode, which has restricted access to prevent them from interfering with the OS."
  },
  {
    id: 4,
    question: "What is a system call?",
    options: [
      "A call made by a user program to access hardware directly",
      "A call made by the OS to a user program",
      "A programmatic way for a user program to request a service from the kernel",
      "A function call within the same program"
    ],
    correctAnswer: 2,
    explanation: "A system call is the mechanism used by an application program to request a service from the operating system's kernel. These services include tasks like file I/O, process creation, and network communication."
  },
  {
    id: 5,
    question: "Which of the following describes a monolithic kernel architecture?",
    options: [
      "The kernel is broken down into smaller, communicating modules",
      "All operating system services run in a single, large address space in kernel mode",
      "Only the most basic functions are in the kernel, and other services are user-level processes",
      "It is a hybrid of different kernel designs"
    ],
    correctAnswer: 1,
    explanation: "A monolithic kernel is an architecture where the entire operating system, including services like file systems, device drivers, and memory management, runs as a single large process in kernel mode."
  },
  {
    id: 6,
    question: "What is the primary advantage of a microkernel architecture?",
    options: [
      "Better performance due to less communication overhead",
      "Increased security and stability as services are isolated",
      "Simpler to design and implement",
      "All services are in a single address space for faster access"
    ],
    correctAnswer: 1,
    explanation: "In a microkernel, only essential services run in the kernel, while others run as user-space processes. This isolation means a failure in one service is less likely to crash the entire OS, making it more secure and stable."
  },
  {
    id: 7,
    question: "What is a virtual machine?",
    options: [
      "A physical machine that is shared by multiple operating systems",
      "A software emulation of a physical computer system",
      "A secure sandbox for running untrusted applications",
      "A hardware component that assists in virtualization"
    ],
    correctAnswer: 1,
    explanation: "A virtual machine (VM) is a software-based emulation of a computer that can run its own operating system and applications as if it were a physical computer."
  },
  {
    id: 8,
    question: "The initial program that is run when a computer is powered on is called?",
    options: [
      "The Operating System Kernel",
      "The Command Interpreter",
      "The Bootstrap Program",
      "The Scheduler"
    ],
    correctAnswer: 2,
    explanation: "The bootstrap program, or bootloader, is the first piece of code that runs when a computer is started. Its primary job is to initialize the system hardware and load the operating system kernel into memory."
  },
  {
    id: 9,
    question: "What is 'spooling'?",
    options: [
      "The process of saving data to a secure location",
      "The overlapping of I/O of one job with the computation of another job",
      "The process of putting jobs in a buffer where a device can access them when it is ready",
      "The technique of temporarily storing data for use by a device or program"
    ],
    correctAnswer: 2,
    explanation: "Spooling (Simultaneous Peripheral Operations On-Line) is a process where data is temporarily held in a buffer (spool) and is waiting to be processed by a device or program. A common example is print spooling."
  },
  {
    id: 10,
    question: "What is a Real-Time Operating System (RTOS)?",
    options: [
      "An OS that is designed for multimedia applications",
      "An OS that responds to input within a specific, predictable time frame",
      "An OS that allows multiple users to share the system simultaneously",
      "An OS that is free and open-source"
    ],
    correctAnswer: 1,
    explanation: "A Real-Time Operating System (RTOS) is designed for systems where the time it takes to process and respond to an event is critical. These are used in applications like robotics, industrial control, and medical devices."
  },
  {
    id: 11,
    question: "In a time-sharing operating system, what is the primary goal?",
    options: [
      "To maximize CPU utilization",
      "To minimize response time for users",
      "To process as many jobs as possible in a given time",
      "To provide a secure environment"
    ],
    correctAnswer: 1,
    explanation: "A time-sharing system is designed to allow multiple users to interact with a computer simultaneously. The OS achieves this by quickly switching between processes, giving each user the impression that they have dedicated access. Minimizing response time is crucial for a good user experience."
  },
  {
    id: 12,
    question: "The difference between a hard and a soft real-time system is that:",
    options: [
      "A hard real-time system is more difficult to program.",
      "A hard real-time system has stricter timing constraints.",
      "A soft real-time system does not require a kernel.",
      "A soft real-time system is only used for multimedia."
    ],
    correctAnswer: 1,
    explanation: "In a hard real-time system, missing a deadline is a total system failure. In a soft real-time system, missing a deadline is not catastrophic but will result in degraded performance."
  },
  {
    id: 13,
    question: "What is the main function of a command interpreter?",
    options: [
      "To handle system calls",
      "To manage memory",
      "To read and execute commands entered by the user",
      "To load programs into memory"
    ],
    correctAnswer: 2,
    explanation: "The command interpreter, also known as the shell, is the part of the OS that provides an interface for the user to interact with the system by entering and executing commands."
  },
  {
    id: 14,
    question: "What is an interrupt?",
    options: [
      "A signal from a hardware or software event that needs immediate attention",
      "An error in a program",
      "A system call",
      "A delay in processing"
    ],
    correctAnswer: 0,
    explanation: "An interrupt is a signal sent to the CPU that indicates an event has occurred that requires immediate attention. This causes the CPU to suspend its current task, save its state, and execute a special routine called an interrupt handler."
  },
  {
    id: 15,
    question: "Which of the following is an advantage of a multiprocessor system?",
    options: [
      "Increased throughput",
      "Economy of scale",
      "Increased reliability",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Multiprocessor systems offer several advantages: increased throughput by executing more tasks in parallel, economy of scale by sharing peripherals, and increased reliability because the failure of one processor does not halt the entire system."
  },
  {
    id: 16,
    question: "What is a process?",
    options: [
      "A program stored on a disk",
      "A program in execution",
      "A part of a program",
      "A set of instructions"
    ],
    correctAnswer: 1,
    explanation: "A process is an instance of a computer program that is being executed. It contains the program code, its current activity, and is allocated system resources."
  },
  {
    id: 17,
    question: "Which of the following is NOT a standard state of a process?",
    options: [
      "New",
      "Running",
      "Ready",
      "Terminated",
      "Sleeping"
    ],
    correctAnswer: 4,
    explanation: "The standard process life cycle includes the following states: New (being created), Ready (waiting to be assigned to a processor), Running (instructions are being executed), Waiting (waiting for some event), and Terminated (finished execution). While some OS's use 'Sleeping', it is not part of the standard 5-state model."
  },
  {
    id: 18,
    question: "What is a Process Control Block (PCB)?",
    options: [
      "A data structure that stores information about a process",
      "A block of memory allocated to a process",
      "A hardware component that controls processes",
      "The program code of a process"
    ],
    correctAnswer: 0,
    explanation: "A Process Control Block (PCB) is a data structure maintained by the OS for every process. It contains all the information the OS needs to manage the process, such as its state, program counter, CPU registers, and memory management information."
  },
  {
    id: 19,
    question: "What is the primary difference between a process and a thread?",
    options: [
      "Processes are heavyweight, while threads are lightweight",
      "Threads within the same process share the same address space",
      "Context switching between threads is faster than between processes",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Threads are units of execution within a process that share the same memory space, making them lightweight. Processes have separate memory spaces. Consequently, creating, managing, and context-switching between threads is generally faster."
  },
  {
    id: 20,
    question: "What is context switching?",
    options: [
      "The process of saving the state of one process and restoring the state of another",
      "The process of switching between user mode and kernel mode",
      "The process of moving a process from memory to disk",
      "The process of allocating CPU to a process"
    ],
    correctAnswer: 0,
    explanation: "Context switching is the mechanism the OS uses to switch the CPU from one process (or thread) to another. It involves saving the context (state) of the current process in its PCB and loading the context of the new process."
  },
  {
    id: 21,
    question: "Which type of scheduler selects which processes should be brought into the ready queue?",
    options: [
      "Short-term scheduler",
      "Medium-term scheduler",
      "Long-term scheduler",
      "CPU scheduler"
    ],
    correctAnswer: 2,
    explanation: "The long-term scheduler, or job scheduler, selects processes from a pool on the disk and loads them into memory for execution. It controls the degree of multiprogramming."
  },
  {
    id: 22,
    question: "What is Inter-Process Communication (IPC)?",
    options: [
      "A mechanism that allows processes to communicate and synchronize their actions",
      "A way for a process to communicate with the kernel",
      "A method for a process to access hardware directly",
      "The communication between a process and its threads"
    ],
    correctAnswer: 0,
    explanation: "Since processes have separate address spaces, they need a mechanism to communicate with each other. IPC provides this mechanism through methods like shared memory, message passing, and pipes."
  },
  {
    id: 23,
    question: "A process that has terminated, but whose parent has not yet called wait(), is known as a?",
    options: [
      "Orphan process",
      "Zombie process",
      "Daemon process",
      "Child process"
    ],
    correctAnswer: 1,
    explanation: "A zombie process is a process that has completed execution but still has an entry in the process table. This entry is needed to allow the parent process to read its child's exit status."
  },
  {
    id: 24,
    question: "What is the purpose of the fork() system call?",
    options: [
      "To terminate a process",
      "To create a new process",
      "To execute a new program",
      "To put a process to sleep"
    ],
    correctAnswer: 1,
    explanation: "The fork() system call is used in Unix-like operating systems to create a new process, which is an exact copy of the calling process. This new process is called the child process."
  },
  {
    id: 25,
    question: "What is the main advantage of using a thread pool?",
    options: [
      "It is more secure than creating new threads",
      "It reduces the overhead of thread creation and destruction",
      "It allows for an unlimited number of threads",
      "It simplifies thread synchronization"
    ],
    correctAnswer: 1,
    explanation: "A thread pool is a collection of pre-created worker threads ready to be assigned tasks. Using a thread pool avoids the significant overhead associated with creating a new thread for each task."
  },
  {
    id: 26,
    question: "The difference between concurrency and parallelism is:",
    options: [
      "Concurrency is when multiple tasks are making progress at the same time; parallelism is when tasks literally run at the same time.",
      "Parallelism is a more general concept than concurrency.",
      "Concurrency requires a multi-core processor.",
      "There is no difference."
    ],
    correctAnswer: 0,
    explanation: "Concurrency is the ability to handle multiple tasks by making progress on them in overlapping time periods. Parallelism is the ability to execute multiple tasks simultaneously, which requires a multi-core processor."
  },
  {
    id: 27,
    question: "User-level threads are managed by:",
    options: [
      "The kernel",
      "A thread library at the user level",
      "The hardware",
      "The application itself"
    ],
    correctAnswer: 1,
    explanation: "User-level threads are implemented and managed by a thread library in the user space, without any support from the kernel. This makes them fast to create and manage but has limitations."
  },
  {
    id: 28,
    question: "A process that is running and is taken away from the CPU so another process can run is said to be:",
    options: [
      "Terminated",
      "Blocked",
      "Preempted",
      "Swapped"
    ],
    correctAnswer: 2,
    explanation: "Preemption is the act of temporarily interrupting a running task, with the intention of resuming it at a later time. This is carried out by a scheduler in preemptive multitasking operating systems."
  },
  {
    id: 29,
    question: "A process that is waiting for an I/O operation to complete will be in which state?",
    options: [
      "Ready",
      "Running",
      "Waiting (or Blocked)",
      "Terminated"
    ],
    correctAnswer: 2,
    explanation: "When a process needs to wait for an event, such as the completion of an I/O request, it transitions from the running state to the waiting state so that the CPU can be utilized by another process."
  },
  {
    id: 30,
    question: "What is an orphan process?",
    options: [
      "A process that has terminated before its parent.",
      "A process whose parent has terminated without calling wait().",
      "A process with no parent.",
      "A process that cannot create child processes."
    ],
    correctAnswer: 1,
    explanation: "An orphan process is a running process whose parent process has terminated. In most Unix-like systems, an orphan process is immediately adopted by the init process (process ID 1)."
  },
  {
    id: 31,
    question: "What is CPU Scheduling?",
    options: [
      "The process of moving processes from memory to disk",
      "The process of selecting a process from the ready queue to execute on the CPU",
      "The process of allocating memory to processes",
      "The process of terminating processes"
    ],
    correctAnswer: 1,
    explanation: "CPU scheduling is the basis of multiprogrammed operating systems. By switching the CPU among processes, the OS can make the computer more productive. The component that makes this decision is the short-term scheduler."
  },
  {
    id: 32,
    question: "Which scheduling algorithm executes processes in the order they arrive in the ready queue?",
    options: [
      "Shortest Job First (SJF)",
      "Round Robin (RR)",
      "First-Come, First-Served (FCFS)",
      "Priority Scheduling"
    ],
    correctAnswer: 2,
    explanation: "FCFS is the simplest CPU scheduling algorithm. The process that requests the CPU first is allocated the CPU first. It is implemented with a simple FIFO queue."
  },
  {
    id: 33,
    question: "What is the 'convoy effect'?",
    options: [
      "When a long process is followed by several short processes in FCFS scheduling",
      "When a short process is followed by several long processes in FCFS scheduling",
      "When a high-priority process blocks a low-priority process",
      "When processes with the same priority are executed in a round-robin fashion"
    ],
    correctAnswer: 0,
    explanation: "The convoy effect is a phenomenon associated with the FCFS algorithm, where several I/O-bound processes get stuck behind a CPU-bound process, leading to poor utilization of resources."
  },
  {
    id: 34,
    question: "The Shortest Job First (SJF) algorithm is optimal because it gives the minimum:",
    options: [
      "Average turnaround time",
      "Average waiting time",
      "Response time",
      "Throughput"
    ],
    correctAnswer: 1,
    explanation: "The SJF algorithm associates with each process the length of its next CPU burst and assigns the CPU to the process with the smallest burst. This strategy is provably optimal in terms of minimizing the average waiting time."
  },
  {
    id: 35,
    question: "The main problem with the SJF algorithm is:",
    options: [
      "It can lead to starvation for long processes",
      "It is complex to implement",
      "It is difficult to know the length of the next CPU request",
      "It has a high overhead"
    ],
    correctAnswer: 2,
    explanation: "The real difficulty with SJF is knowing the length of the next CPU request. For short-term scheduling, there is no way to know the length of the next CPU burst. One approach is to try to approximate it."
  },
  {
    id: 36,
    question: "What is the difference between preemptive and non-preemptive scheduling?",
    options: [
      "Preemptive scheduling allows a process to be interrupted in the middle of its execution",
      "Non-preemptive scheduling is more efficient",
      "Preemptive scheduling is only used in batch systems",
      "Non-preemptive scheduling allows for better response times"
    ],
    correctAnswer: 0,
    explanation: "In non-preemptive scheduling, once the CPU is allocated to a process, it keeps the CPU until it releases it. In preemptive scheduling, the CPU can be taken away from a process."
  },
  {
    id: 37,
    question: "Which scheduling algorithm is particularly well-suited for time-sharing systems?",
    options: [
      "FCFS",
      "SJF",
      "Round Robin (RR)",
      "Priority Scheduling"
    ],
    correctAnswer: 2,
    explanation: "The Round Robin algorithm is designed especially for time-sharing systems. It is similar to FCFS, but preemption is added to switch between processes using a fixed time quantum."
  },
  {
    id: 38,
    question: "In Priority Scheduling, what is 'starvation'?",
    options: [
      "When a process is waiting for I/O",
      "When a process is not able to gain access to the CPU because it has a low priority",
      "When a process is terminated by the OS",
      "When a process is in the ready queue but not in memory"
    ],
    correctAnswer: 1,
    explanation: "Starvation, or indefinite blocking, is a problem where a low-priority process can be perpetually denied access to the CPU if there is a steady stream of higher-priority processes arriving."
  },
  {
    id: 39,
    question: "What is 'aging' in the context of scheduling?",
    options: [
      "A technique to increase the priority of processes that have been waiting for a long time",
      "The process of a process getting older and less efficient",
      "A technique to decrease the priority of processes that have run for a long time",
      "The process of removing old processes from the system"
    ],
    correctAnswer: 0,
    explanation: "Aging is a solution to the problem of starvation. It is a technique of gradually increasing the priority of processes that wait in the system for a long time."
  },
  {
    id: 40,
    question: "A Multilevel Queue Scheduling algorithm partitions the ready queue into several separate queues based on:",
    options: [
      "Process size",
      "Process priority",
      "Process burst time",
      "Any property of the process (e.g., memory size, priority, type)"
    ],
    correctAnswer: 3,
    explanation: "In a multilevel queue scheduling algorithm, the ready queue is partitioned into separate queues. Processes are permanently assigned to one queue, generally based on some property of the process, such as memory size, process priority, or process type."
  },
  {
    id: 41,
    question: "What is Turnaround Time?",
    options: [
      "The time a process spends waiting in the ready queue.",
      "The time from the submission of a process to its completion.",
      "The time it takes to execute a process.",
      "The time from when a request was submitted until the first response is produced."
    ],
    correctAnswer: 1,
    explanation: "Turnaround time is the total time that a process spends in the system, from the moment it is submitted to the moment it completes. It is the sum of waiting, executing, and I/O time."
  },
  {
    id: 42,
    question: "What is Waiting Time?",
    options: [
      "The sum of the periods a process spends waiting in the ready queue.",
      "The total time a process is in the system.",
      "The time a process spends waiting for I/O.",
      "The time it takes for a process to start responding."
    ],
    correctAnswer: 0,
    explanation: "Waiting time is the amount of time a process has been waiting in the ready queue, ready to execute but waiting to be assigned the CPU."
  },
  {
    id: 43,
    question: "What is Response Time?",
    options: [
      "The time it takes to complete a process.",
      "The time from the submission of a request until the first response is produced.",
      "The time a process spends in the ready queue.",
      "The time a process is running on the CPU."
    ],
    correctAnswer: 1,
    explanation: "Response time is the time from the submission of a request until the first response is produced, not the time it takes to output that response. It is a crucial measure for interactive systems."
  },
  {
    id: 44,
    question: "In a Round Robin scheduling algorithm, a large time quantum degenerates to:",
    options: [
      "Shortest Job First (SJF)",
      "First-Come, First-Served (FCFS)",
      "Priority Scheduling",
      "It remains Round Robin"
    ],
    correctAnswer: 1,
    explanation: "If the time quantum in RR is very large, each process will likely finish its CPU burst without being preempted. This effectively makes the RR algorithm behave like FCFS."
  },
  {
    id: 45,
    question: "Which scheduling algorithm can be preemptive or non-preemptive?",
    options: [
      "FCFS",
      "SJF",
      "Priority Scheduling",
      "Both b and c"
    ],
    correctAnswer: 3,
    explanation: "Both SJF and Priority scheduling can be implemented as either preemptive or non-preemptive. In their preemptive versions, a newly arrived process can interrupt the currently running process if it has a shorter job or higher priority."
  },
  {
    id: 46,
    question: "What is a race condition?",
    options: [
      "When two processes are racing to acquire the CPU",
      "When the outcome depends on the unpredictable order of access to shared data",
      "When a process is trying to access a device that is already in use",
      "When a process runs faster than another"
    ],
    correctAnswer: 1,
    explanation: "A race condition is an undesirable situation that occurs when a system attempts to perform two or more operations at the same time, but because of the nature of the system, the operations must be done in the proper sequence to be done correctly."
  },
  {
    id: 47,
    question: "A section of code that accesses shared resources and must not be executed by more than one process at a time is called a?",
    options: [
      "Critical Section",
      "Mutual Exclusion",
      "Semaphore",
      "Monitor"
    ],
    correctAnswer: 0,
    explanation: "The critical section is a segment of code in a program where shared resources are accessed. No two processes should be executing in their critical sections for the same shared resource simultaneously."
  },
  {
    id: 48,
    question: "What is Mutual Exclusion?",
    options: [
      "A condition where two processes cannot be in the same state",
      "The requirement that no two processes can be in their critical sections at the same time",
      "A type of IPC mechanism",
      "A scheduling policy"
    ],
    correctAnswer: 1,
    explanation: "Mutual exclusion is a property of concurrency control, instituted for the purpose of preventing race conditions. It is the requirement that one thread of execution never enters its critical section at the same time that another concurrent thread of execution enters its own critical section."
  },
  {
    id: 49,
    question: "What is a semaphore?",
    options: [
      "A hardware lock",
      "A variable that can be accessed by only one process at a time",
      "A synchronization tool accessed only through wait() and signal() operations",
      "A high-level synchronization construct"
    ],
    correctAnswer: 2,
    explanation: "A semaphore is a variable or abstract data type used to control access to a common resource by multiple processes. It is an integer variable that is accessed only through two standard atomic operations: wait() and signal()."
  },
  {
    id: 50,
    question: "A binary semaphore is a semaphore whose integer value can range only between:",
    options: [
      "0 and 1",
      "-1 and 1",
      "0 and N (any positive integer)",
      "Any integer value"
    ],
    correctAnswer: 0,
    explanation: "A binary semaphore is restricted to the values 0 and 1. They are also known as mutex locks, as they can be used to provide mutual exclusion for a critical section."
  },
   {
    id: 51,
    question: "The wait() operation on a semaphore is also known as:",
    options: [
      "P() operation",
      "V() operation",
      "down() operation",
      "Both a and c"
    ],
    correctAnswer: 3,
    explanation: "In the original terminology by Dijkstra, the wait() operation was called P() (from the Dutch proberen, to test) or down(). The signal() operation was called V() (from verhogen, to increment) or up()."
  },
  {
    id: 52,
    question: "What is 'busy waiting' in the context of synchronization?",
    options: [
      "When a process is waiting for an I/O operation to complete",
      "When a process is repeatedly checking a condition in a loop while waiting for a lock to be released",
      "When a process is in the ready queue",
      "When the CPU is busy executing a process"
    ],
    correctAnswer: 1,
    explanation: "Busy waiting, or spinning, is a technique in which a process repeatedly checks to see if a condition is true, such as whether a lock is available. This can be very inefficient as it consumes CPU cycles without performing any useful work."
  },
  {
    id: 53,
    question: "Which of the following is a high-level synchronization construct that ensures only one process can be active at a time within it?",
    options: [
      "Mutex Lock",
      "Semaphore",
      "Monitor",
      "Spinlock"
    ],
    correctAnswer: 2,
    explanation: "A monitor is an abstract data type that presents a set of programmer-defined operations that are provided with mutual exclusion. It contains shared data and a set of procedures that can operate on that data, ensuring only one process can execute within the monitor at a time."
  },
  {
    id: 54,
    question: "What is the 'Producer-Consumer' problem?",
    options: [
      "A classic problem of scheduling processes",
      "A classic synchronization problem where producers generate data and consumers use it",
      "A problem of memory allocation",
      "A problem related to file systems"
    ],
    correctAnswer: 1,
    explanation: "The producer-consumer problem (also known as the bounded-buffer problem) is a classic example of a multi-process synchronization problem. It involves synchronizing a producer, which creates items and puts them into a shared buffer, and a consumer, which takes items from the buffer."
  },
  {
    id: 55,
    question: "The 'Readers-Writers' problem gives priority to which of the following?",
    options: [
      "It can be implemented to give priority to either readers or writers",
      "It always gives priority to readers",
      "It always gives priority to writers",
      "It gives equal priority to both"
    ],
    correctAnswer: 0,
    explanation: "The Readers-Writers problem is a synchronization problem where multiple readers can access a resource simultaneously, but only one writer can. Solutions can be designed to prioritize readers (potentially starving writers) or prioritize writers (potentially starving readers)."
  },
  {
    id: 56,
    question: "What is a deadlock?",
    options: [
      "A situation where a process is waiting for an I/O device indefinitely",
      "A situation where two or more processes are blocked forever, each waiting for a resource held by another",
      "A situation where a process cannot get the CPU",
      "A situation where a process corrupts the data of another process"
    ],
    correctAnswer: 1,
    explanation: "A deadlock is a state in which each member of a group of processes is waiting for some other member to release a resource, and none of them can proceed."
  },
  {
    id: 57,
    question: "Which of the following is NOT one of the four necessary conditions for a deadlock to occur?",
    options: [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    correctAnswer: 2,
    explanation: "The four necessary conditions for a deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Preemption is the act of taking a resource away, which can be a method to recover from deadlock, not a condition for it."
  },
  {
    id: 58,
    question: "The 'Ostrich Algorithm' is used for:",
    options: [
      "Deadlock prevention",
      "Deadlock avoidance",
      "Deadlock detection",
      "Ignoring the problem of deadlocks"
    ],
    correctAnswer: 3,
    explanation: "The Ostrich Algorithm is a strategy of ignoring a potential problem on the basis that it may be a very rare occurrence. It is used by some operating systems that assume deadlocks are very infrequent and the cost of prevention or detection is too high."
  },
  {
    id: 59,
    question: "What is the primary method of deadlock prevention?",
    options: [
      "To ensure that at least one of the four necessary conditions for deadlock cannot hold",
      "To periodically check for deadlocks",
      "To use a resource allocation graph",
      "To allow the system to enter a deadlocked state and then recover"
    ],
    correctAnswer: 0,
    explanation: "Deadlock prevention works by restraining resource requests to prevent at least one of the four necessary conditions from occurring. For example, one could violate 'Hold and Wait' by requiring a process to request all its resources before it begins execution."
  },
  {
    id: 60,
    question: "The Banker's Algorithm is an example of a technique for:",
    options: [
      "Deadlock prevention",
      "Deadlock avoidance",
      "Deadlock detection",
      "Deadlock recovery"
    ],
    correctAnswer: 1,
    explanation: "The Banker's Algorithm is a resource allocation and deadlock avoidance algorithm. It checks if allocating a resource to a process will leave the system in a 'safe state' before granting the request."
  },
  {
    id: 61,
    question: "What is a safe state in the context of deadlock avoidance?",
    options: [
      "A state where no process is blocked",
      "A state from which the system can allocate resources to each process in some order and still avoid a deadlock",
      "A state where all processes have completed",
      "A state where the CPU utilization is high"
    ],
    correctAnswer: 1,
    explanation: "A system is in a safe state if there exists a sequence of all the processes in the system such that for each process, the resources that it can still request can be satisfied by the currently available resources plus the resources held by all the preceding processes."
  },
  {
    id: 62,
    question: "A Resource-Allocation Graph is used for:",
    options: [
      "Visualizing memory allocation",
      "Describing deadlocks",
      "Scheduling CPU tasks",
      "Managing file systems"
    ],
    correctAnswer: 1,
    explanation: "A Resource-Allocation Graph is a directed graph that can be used to describe the state of resource allocation and requests. If the graph contains a cycle, a deadlock might exist."
  },
  {
    id: 63,
    question: "If a resource-allocation graph has a cycle, what can be concluded?",
    options: [
      "The system is definitely in a deadlocked state",
      "The system is definitely not in a deadlocked state",
      "A deadlock may exist if there is only one instance of each resource type",
      "A deadlock will occur in the future"
    ],
    correctAnswer: 2,
    explanation: "If a resource-allocation graph contains no cycles, then no process is deadlocked. If the graph does contain a cycle, a deadlock may exist. If each resource type has exactly one instance, then a cycle implies that a deadlock has occurred."
  },
  {
    id: 64,
    question: "Which of the following is a common method for deadlock recovery?",
    options: [
      "Process termination (aborting one or more processes)",
      "Resource preemption (taking a resource from one process)",
      "Rolling back processes to a safe state",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "When a deadlock is detected, the system can be recovered by aborting processes, preempting resources from one or more deadlocked processes, or rolling back processes to a previously saved checkpoint."
  },
  {
    id: 65,
    question: "Allowing a resource to be forcibly taken from a process would violate which deadlock condition?",
    options: [
      "Mutual Exclusion",
      "Hold and Wait",
      "No Preemption",
      "Circular Wait"
    ],
    correctAnswer: 2,
    explanation: "The 'No Preemption' condition states that resources can be released only voluntarily by the process holding them. Allowing the OS to forcibly preempt a resource would directly violate this condition."
  },
  {
    id: 66,
    question: "The address generated by the CPU is referred to as:",
    options: [
      "Physical address",
      "Logical address",
      "Absolute address",
      "Relative address"
    ],
    correctAnswer: 1,
    explanation: "A logical address (also known as a virtual address) is an address generated by the CPU. This address does not correspond directly to a physical location in main memory."
  },
  {
    id: 67,
    question: "The address seen by the memory unit is commonly referred to as:",
    options: [
      "Physical address",
      "Logical address",
      "Virtual address",
      "Compiled address"
    ],
    correctAnswer: 0,
    explanation: "A physical address is the actual address in the main memory hardware. The Memory Management Unit (MMU) is responsible for translating the logical address to its corresponding physical address."
  },
  {
    id: 68,
    question: "What is the role of the Memory Management Unit (MMU)?",
    options: [
      "To manage the allocation of CPU time",
      "To translate logical addresses to physical addresses",
      "To manage secondary storage",
      "To handle interrupts"
    ],
    correctAnswer: 1,
    explanation: "The MMU is a hardware device that maps virtual (logical) addresses to physical addresses. It is a crucial component for implementing virtual memory."
  },
  {
    id: 69,
    question: "The process of moving a process from main memory to a backing store (disk) and then back is called:",
    options: [
      "Swapping",
      "Paging",
      "Segmentation",
      "Spooling"
    ],
    correctAnswer: 0,
    explanation: "Swapping is a memory management technique where a process can be temporarily moved from main memory to a backing store (e.g., a hard disk) and then brought back into memory for continued execution."
  },
  {
    id: 70,
    question: "In contiguous memory allocation, the memory is divided into:",
    options: [
      "Fixed-size pages",
      "Variable-size segments",
      "Several fixed-size partitions or one large variable-size partition",
      "Frames of equal size"
    ],
    correctAnswer: 2,
    explanation: "In contiguous memory allocation, each process is contained in a single contiguous section of memory. Early systems used fixed partitioning, while later systems used variable partitioning where partitions are created dynamically."
  },
  {
    id: 71,
    question: "What is external fragmentation?",
    options: [
      "The memory internal to a partition is not fully used",
      "The total memory space exists to satisfy a request, but it is not contiguous",
      "Memory lost due to the page table",
      "Memory that is allocated but never used by the process"
    ],
    correctAnswer: 1,
    explanation: "External fragmentation occurs in dynamic memory allocation when free memory is separated into small blocks. While the total free memory might be sufficient for a new process, it's not available in a single continuous block."
  },
  {
    id: 72,
    question: "What is internal fragmentation?",
    options: [
      "The memory space exists but is not contiguous",
      "Memory that is allocated as part of a fixed-size block but is not used by the process",
      "Memory that has been freed but not yet collected",
      "The overhead of the memory management data structures"
    ],
    correctAnswer: 1,
    explanation: "Internal fragmentation occurs when memory is divided into fixed-sized blocks (e.g., in paging). If a process is allocated a block of memory that is larger than its needs, the unused space within that allocated block is called internal fragmentation."
  },
  {
    id: 73,
    question: "Which memory allocation policy results in the largest leftover hole in memory?",
    options: [
      "First-fit",
      "Best-fit",
      "Worst-fit",
      "Next-fit"
    ],
    correctAnswer: 2,
    explanation: "The worst-fit algorithm allocates the largest available hole to a new process. The idea is that this will leave a larger leftover hole, which might be more useful for future requests than the small leftover hole created by best-fit."
  },
  {
    id: 74,
    question: "The memory management scheme that allows a process's physical address space to be non-contiguous is called:",
    options: [
      "Paging",
      "Swapping",
      "Contiguous allocation",
      "Partitioning"
    ],
    correctAnswer: 0,
    explanation: "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. It works by dividing physical memory into fixed-sized blocks called frames and logical memory into blocks of the same size called pages."
  },
  {
    id: 75,
    question: "A page table is used to:",
    options: [
      "Store the pages of a process",
      "Map page numbers to frame numbers",
      "Keep track of free memory frames",
      "Store the process control block"
    ],
    correctAnswer: 1,
    explanation: "The page table is a data structure used by the virtual memory system to store the mapping between logical pages and physical frames. Each process has its own page table."
  },
  {
    id: 76,
    question: "What is a Translation Look-aside Buffer (TLB)?",
    options: [
      "A buffer for I/O operations",
      "A special, small, fast-lookup hardware cache for page table entries",
      "A buffer that stores recently used instructions",
      "A cache for file system data"
    ],
    correctAnswer: 1,
    explanation: "The TLB is a memory cache that is used to reduce the time taken to access a user memory location. It stores recent translations of virtual memory to physical addresses for faster retrieval. A 'TLB hit' avoids the need to access the full page table in memory."
  },
  {
    id: 77,
    question: "The primary difference between paging and segmentation is:",
    options: [
      "Paging divides memory into fixed-size blocks, while segmentation uses variable-size blocks",
      "Segmentation is faster than paging",
      "Paging suffers from external fragmentation",
      "Segments are logical units, while pages are physical units"
    ],
    correctAnswer: 0,
    explanation: "Paging is a physical division of memory into fixed-size frames. Segmentation is a logical division of a program into variable-sized segments (e.g., code, data, stack) based on its structure from the user's point of view."
  },
  {
    id: 78,
    question: "Compaction is a technique used to solve:",
    options: [
      "Internal fragmentation",
      "External fragmentation",
      "Thrashing",
      "Page faults"
    ],
    correctAnswer: 1,
    explanation: "Compaction is a solution to external fragmentation. It involves shuffling the memory contents to place all free memory together in one large block. However, it can be a very time-consuming process."
  },
  {
    id: 79,
    question: "If a logical address space is 2^m and the page size is 2^n, the number of bits in the page number is:",
    options: [
      "m",
      "n",
      "m - n",
      "m + n"
    ],
    correctAnswer: 2,
    explanation: "A logical address is split into a page number and a page offset. If the page size is 2^n bytes, then 'n' bits are needed for the offset. If the total logical address space is 2^m bytes, then 'm' bits are for the address. The remaining bits, (m - n), are used for the page number."
  },
  {
    id: 80,
    question: "Which of the following is a benefit of segmentation?",
    options: [
      "It simplifies handling of data structures that grow and shrink",
      "It allows for protection and sharing of code or data",
      "It provides a logical view of memory that aligns with the programmer's view",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Segmentation provides several benefits. Since segments correspond to logical units, it's easier to manage structures that change in size. It also facilitates sharing (e.g., a code segment) and protection (e.g., marking a code segment as read-only)."
  },
  {
    id: 81,
    question: "What is the primary benefit of virtual memory?",
    options: [
      "It increases the total amount of physical RAM in a system.",
      "It allows the logical address space of a process to be much larger than the physical address space.",
      "It makes the CPU run faster.",
      "It eliminates the need for a hard disk."
    ],
    correctAnswer: 1,
    explanation: "Virtual memory creates the illusion for each process that it has its own private, contiguous address space, the size of which is not limited by the amount of physical RAM available."
  },
  {
    id: 82,
    question: "What is demand paging?",
    options: [
      "A technique where a page is brought into main memory only when it is needed.",
      "A technique where the user must request memory pages manually.",
      "A system where all pages for a process are loaded into memory at once.",
      "The process of requesting more physical memory from the system administrator."
    ],
    correctAnswer: 0,
    explanation: "Demand paging is the most common implementation of virtual memory. It follows a lazy loading approach: a page is only loaded from the backing store into RAM the first time it is accessed."
  },
  {
    id: 83,
    question: "What is a page fault?",
    options: [
      "A hardware error in a memory module.",
      "A trap raised when a process accesses a page that is not in physical RAM.",
      "An error that occurs when a page table becomes corrupted.",
      "When a process tries to access a memory address outside its logical address space."
    ],
    correctAnswer: 1,
    explanation: "A page fault is the mechanism that triggers demand paging. When the MMU detects that a requested page is not in RAM, it traps to the OS, which then loads the page from disk."
  },
  {
    id: 84,
    question: "What is the purpose of a page replacement algorithm?",
    options: [
      "To decide which process should be swapped out to disk.",
      "To decide which free frame in memory to use for a new page.",
      "To decide which page in memory should be swapped out when no frames are free.",
      "To re-organize the pages of a process in memory to make them contiguous."
    ],
    correctAnswer: 2,
    explanation: "When a page fault occurs and there are no empty physical frames, the OS must evict an existing page. A page replacement algorithm is the policy the OS uses to select a 'victim' page to be removed from memory."
  },
  {
    id: 85,
    question: "Which page replacement algorithm suffers from Belady's Anomaly?",
    options: [
      "Optimal (OPT)",
      "Least Recently Used (LRU)",
      "First-In, First-Out (FIFO)",
      "Second Chance"
    ],
    correctAnswer: 2,
    explanation: "Belady's Anomaly is a phenomenon where increasing the number of page frames results in an increase in the number of page faults for a given memory access pattern. The FIFO algorithm is susceptible to this."
  },
  {
    id: 86,
    question: "The Least Recently Used (LRU) algorithm replaces the page that:",
    options: [
      "Has been in memory the longest.",
      "Has not been used for the longest period of time.",
      "Will not be used for the longest time in the future.",
      "Is the smallest in size."
    ],
    correctAnswer: 1,
    explanation: "LRU is a page replacement algorithm that works on the principle of locality of reference. It assumes that a page that has not been used in a long time is unlikely to be used again soon."
  },
  {
    id: 87,
    question: "What is 'thrashing'?",
    options: [
      "When the CPU scheduler switches between processes too frequently.",
      "A condition where a system spends more time paging than executing instructions.",
      "When a disk's read/write head moves back and forth rapidly.",
      "A security attack that overwhelms the system with page faults."
    ],
    correctAnswer: 1,
    explanation: "Thrashing is a state of severe performance degradation that occurs when the system does not have enough physical memory to hold the working sets of all active processes. This leads to a high rate of page faults."
  },
  {
    id: 88,
    question: "What is Copy-on-Write (COW)?",
    options: [
      "A technique that copies a file every time it is written to.",
      "A technique where multiple processes share a page, but a private copy is created on modification.",
      "A backup strategy for virtual memory.",
      "A method for writing to read-only memory."
    ],
    correctAnswer: 1,
    explanation: "Copy-on-Write is a resource management technique used to optimize the fork() system call. Instead of duplicating all pages, parent and child initially share pages. A page is only copied when one of them tries to write to it."
  },
  {
    id: 89,
    question: "From the OS perspective, what is a file?",
    options: [
      "A collection of related information defined by its creator, stored on secondary storage.",
      "A hardware component for storing data.",
      "A pointer to a location in memory.",
      "A sequence of system calls."
    ],
    correctAnswer: 0,
    explanation: "A file is the fundamental abstraction that the OS provides for storing data on a non-volatile medium. It is a logical storage unit that allows users to organize information without knowing the physical details of the storage device."
  },
  {
    id: 90,
    question: "What is the purpose of a directory in a file system?",
    options: [
      "To store the actual contents of files.",
      "To provide a mapping from human-readable file names to their corresponding file control blocks.",
      "To store the operating system's kernel.",
      "To manage the allocation of disk blocks."
    ],
    correctAnswer: 1,
    explanation: "A directory (or folder) is a symbol table that organizes files. It contains entries that associate file names with the underlying data structures (like inodes) that hold the metadata and block locations for the files."
  },
  {
    id: 91,
    question: "Which file allocation method suffers from external fragmentation?",
    options: [
      "Linked Allocation",
      "Indexed Allocation",
      "Contiguous Allocation",
      "All of the above"
    ],
    correctAnswer: 2,
    explanation: "In contiguous allocation, each file occupies a set of contiguous blocks on the disk. Over time, as files are created and deleted, the free space becomes broken up into small, non-contiguous holes, leading to external fragmentation."
  },
  {
    id: 92,
    question: "What is the primary advantage of linked allocation for files?",
    options: [
      "It provides the fastest possible random access to file blocks.",
      "It is the most space-efficient method.",
      "It completely eliminates external fragmentation.",
      "It is very simple to implement."
    ],
    correctAnswer: 2,
    explanation: "In linked allocation, the blocks of a file can be scattered anywhere on the disk. Because any free block can be used to grow a file, there is no external fragmentation. Its main disadvantage is slow random access."
  },
  {
    id: 93,
    question: "How does indexed allocation work?",
    options: [
      "It links all the blocks of a file together with pointers.",
      "It allocates a special index block for each file, which contains pointers to all the data blocks.",
      "It stores all files in a single, large index.",
      "It requires all blocks of a file to be contiguous."
    ],
    correctAnswer: 1,
    explanation: "Indexed allocation solves the random access problem of linked allocation while avoiding external fragmentation. To find a specific block, the OS reads the index block to find the pointer to that data block, supporting direct access efficiently."
  },
  {
    id: 94,
    question: "What is an inode (or File Control Block)?",
    options: [
      "The first data block of a file.",
      "A data structure that stores all the essential metadata about a file.",
      "A special type of directory.",
      "A pointer to a file's name."
    ],
    correctAnswer: 1,
    explanation: "The inode (index node) is the central data structure in Unix-like file systems. It contains all information about a file (ownership, permissions, size, block locations) except for its name, which is stored in a directory entry."
  },
  {
    id: 95,
    question: "What does 'mounting' a filesystem mean?",
    options: [
      "Physically installing a new hard drive.",
      "Deleting all the files on a disk partition.",
      "Making a filesystem on a device accessible at a specific point in the directory tree.",
      "Creating a backup of a filesystem."
    ],
    correctAnswer: 2,
    explanation: "Before a filesystem on a device can be accessed, it must be mounted. The mount operation attaches the filesystem to a specific directory (the mount point) in the main filesystem tree, making its contents accessible."
  },
  {
    id: 96,
    question: "A path name like /home/user/file.txt is an example of:",
    options: [
      "A relative path",
      "An absolute path",
      "A physical device address",
      "A file extension"
    ],
    correctAnswer: 1,
    explanation: "An absolute path specifies the location of a file or directory starting from the root directory (/). A relative path specifies the location relative to the current working directory."
  },
  {
    id: 97,
    question: "What is the main purpose of Direct Memory Access (DMA)?",
    options: [
      "To allow user programs to write directly to physical memory.",
      "To allow a device controller to transfer data directly to/from main memory without CPU intervention.",
      "To provide a faster connection between the CPU and its cache.",
      "To manage memory for I/O buffers."
    ],
    correctAnswer: 1,
    explanation: "With DMA, the CPU initiates a transfer, and the DMA controller handles the entire block transfer between a device and memory, interrupting the CPU only when the transfer is complete. This frees the CPU from the inefficient task of programmed I/O."
  },
  {
    id: 98,
    question: "In the context of I/O, what is polling?",
    options: [
      "A technique where the CPU repeatedly checks the status of a device.",
      "A security method to query devices for vulnerabilities.",
      "The process of voting for the next I/O request to be serviced.",
      "A hardware signal sent from a device to the CPU."
    ],
    correctAnswer: 0,
    explanation: "Polling, or busy-waiting, is a simple way for the OS to interact with a device. The CPU sits in a loop, continuously reading the device's status register. It is inefficient because it ties up the CPU while waiting and is the alternative to interrupt-driven I/O."
  },
  {
    id: 99,
    question: "A device controller is:",
    options: [
      "A user-space program that manages a device.",
      "Electronic components that operate a device, acting as an interface between the device and the system bus.",
      "The main CPU of the computer.",
      "The physical cable connecting a device to the computer."
    ],
    correctAnswer: 1,
    explanation: "A device controller is the hardware that makes a peripheral device work with the computer. It has its own registers for data and control signals. The device driver is the software that knows how to operate the controller's interface."
  },
  {
    id: 100,
    question: "The three main ways the OS can handle an I/O request are:",
    options: [
      "Polling, Interrupts, and Direct Memory Access (DMA).",
      "Paging, Segmentation, and Swapping.",
      "FCFS, SCAN, and C-SCAN.",
      "Sockets, Pipes, and Shared Memory."
    ],
    correctAnswer: 0,
    explanation: "These represent the fundamental I/O interaction methods. Polling involves the CPU actively waiting. Interrupts allow the device to signal the CPU when it's ready. DMA offloads the data transfer from the CPU entirely, providing the highest performance."
  },
   {
    id: 101,
    question: "What is a distributed operating system?",
    options: [
      "An OS that runs on multiple, independent, networked computers and presents them as a single system.",
      "An operating system designed for a single mainframe computer.",
      "A time-sharing operating system.",
      "A real-time operating system."
    ],
    correctAnswer: 0,
    explanation: "A distributed OS manages a group of distinct computers and makes them appear to be a single computer. The goal is to provide resource sharing, computation speedup, and enhanced reliability."
  },
  {
    id: 102,
    question: "The primary difference between a Network OS and a Distributed OS is:",
    options: [
      "A Network OS is more aware of the underlying hardware heterogeneity.",
      "A Distributed OS is more tightly coupled, providing a single system image, while a Network OS is loosely coupled.",
      "A Distributed OS cannot manage networking.",
      "A Network OS is an older technology."
    ],
    correctAnswer: 1,
    explanation: "In a Network OS, users are aware of distinct machines. In a Distributed OS, this is hidden; the system manages resources transparently, making the network appear as a single computer."
  },
  {
    id: 103,
    question: "What is a Remote Procedure Call (RPC)?",
    options: [
      "A mechanism that allows a process to call a procedure on another machine as if it were a local call.",
      "A system call to the local kernel.",
      "A way to schedule a procedure to run at a later time.",
      "A hardware interrupt sent over the network."
    ],
    correctAnswer: 0,
    explanation: "RPC abstracts the complexity of network communication. It allows a program to execute a procedure on a remote computer without the programmer needing to code the details for the remote interaction."
  },
  {
    id: 104,
    question: "In the client-server model:",
    options: [
      "All participating computers have equal capabilities.",
      "A central, powerful machine (server) provides services to multiple other machines (clients).",
      "A task is divided among multiple machines that cooperate to solve it.",
      "There is no central point of control."
    ],
    correctAnswer: 1,
    explanation: "The client-server model is a structure that partitions tasks between providers of a service, called servers, and service requesters, called clients. A client initiates requests, and a server fulfills them."
  },
  {
    id: 105,
    question: "What is the role of a socket in network communication?",
    options: [
      "A physical port on a networking device.",
      "An endpoint for sending or receiving data across a computer network.",
      "A data structure for storing network packets.",
      "A protocol for network communication."
    ],
    correctAnswer: 1,
    explanation: "A socket provides an interface for programming network communication. It's an abstraction through which an application can send and receive data, identified by an IP address and a port number."
  },
  {
    id: 106,
    question: "In the Linux file system, what does the command `chmod 751 file.txt` do?",
    options: [
      "Sets permissions to rwx for owner, r-x for group, and --x for others.",
      "Sets permissions to --x for owner, rw- for group, and rwx for others.",
      "It changes the owner of the file.",
      "It is an invalid command."
    ],
    correctAnswer: 0,
    explanation: "chmod changes file permissions using octal numbers: read (4), write (2), execute (1). 7 = 4+2+1 (rwx), 5 = 4+0+1 (r-x), 1 = 0+0+1 (--x)."
  },
  {
    id: 107,
    question: "What is the purpose of the /proc filesystem in Linux?",
    options: [
      "It stores all user processes and programs.",
      "It is a virtual filesystem that provides an interface to kernel data structures.",
      "It contains system-wide configuration files.",
      "It is the primary location for temporary files."
    ],
    correctAnswer: 1,
    explanation: "The /proc filesystem does not store real files. It is created in memory by the kernel and provides a way to see information about the system's hardware, running processes, and kernel configuration."
  },
  {
    id: 108,
    question: "What is a 'signal' in UNIX/Linux?",
    options: [
      "A semaphore used for process synchronization.",
      "A form of inter-process communication used to notify a process of an event.",
      "A network packet.",
      "A hardware interrupt."
    ],
    correctAnswer: 1,
    explanation: "A signal is a limited form of IPC used in Unix-like operating systems. It is an asynchronous notification sent to a process to inform it of an event, such as the user pressing Ctrl-C (SIGINT)."
  },
  {
    id: 109,
    question: "What is the difference between a hard link and a symbolic (soft) link?",
    options: [
      "A hard link is a pointer to an inode, while a symbolic link is a file containing a path to another file.",
      "Hard links can span across different filesystems, but symbolic links cannot.",
      "Deleting the original file invalidates a hard link, but not a symbolic link.",
      "There is no practical difference."
    ],
    correctAnswer: 0,
    explanation: "A hard link is a second name for the same file (same inode). A symbolic link is a separate file that stores the path to the original file. If the original is deleted, the symbolic link breaks."
  },
  {
    id: 110,
    question: "What is the main purpose of the init process (PID 1) in Linux?",
    options: [
      "It is the first user-space process and becomes the ultimate parent of all other processes.",
      "It is the command shell for the root user.",
      "It is responsible for loading the kernel into memory.",
      "It manages network connections."
    ],
    correctAnswer: 0,
    explanation: "The init process is the ancestor of all processes. It is responsible for starting system services at boot time and also adopts any orphan processes whose original parents have terminated."
  },
  {
    id: 111,
    question: "What does the `nice` command do in Linux?",
    options: [
      "It makes a process run faster.",
      "It influences the scheduling priority of a process.",
      "It terminates a process gracefully.",
      "It displays information about a process."
    ],
    correctAnswer: 1,
    explanation: "The nice command invokes a utility with a particular CPU scheduling priority. A higher 'nice' value (e.g., 19) means a lower priority, making the process 'nicer' to other processes."
  },
  {
    id: 112,
    question: "What is a load average in Linux?",
    options: [
      "The percentage of CPU time being used.",
      "The amount of memory currently in use.",
      "A measure of the number of processes that are running or waiting to run.",
      "The speed of disk I/O operations."
    ],
    correctAnswer: 2,
    explanation: "The load average is a measure of system load, typically presented as three numbers for the average over the last one, five, and fifteen minutes. It reflects processes in the run queue or in an uninterruptible sleep state."
  },
  {
    id: 113,
    question: "In shell scripting, what is the difference between `$*` and `$@`?",
    options: [
      "There is no difference.",
      "When quoted, `$*` expands to a single string, while `$@` expands to separate words for each argument.",
      "When quoted, `$@` expands to a single string, while `$*` expands to separate words.",
      "`$*` includes the script name, but `$@` does not."
    ],
    correctAnswer: 1,
    explanation: "When quoted, `\"$*\"` expands to a single argument (\"arg1 arg2 arg3\"). `\"$@\"` expands to multiple arguments (\"arg1\" \"arg2\" \"arg3\"). The latter is preferred for correctly handling arguments with spaces."
  },
  {
    id: 114,
    question: "What is the function of the `grep` command?",
    options: [
      "To create, list, and extract files from an archive.",
      "To search for a specific pattern of text within files.",
      "To edit streams of text.",
      "To display the processes running on the system."
    ],
    correctAnswer: 1,
    explanation: "grep (Global Regular Expression Print) is a powerful command-line utility used to search for lines containing a match to a specified pattern within files."
  },
  {
    id: 115,
    question: "What is a kernel module in Linux?",
    options: [
      "The central component of the OS.",
      "A piece of code that can be loaded into and unloaded from the kernel on demand.",
      "A user-space application that interacts with the kernel.",
      "A script used to configure the kernel."
    ],
    correctAnswer: 1,
    explanation: "Kernel modules (LKMs) are used to extend the functionality of the kernel. This is often used for device drivers, filesystems, or new system calls, allowing for a modular kernel."
  },
  {
    id: 116,
    question: "What is a hypervisor?",
    options: [
      "An operating system designed for virtual machines.",
      "Software, firmware, or hardware that creates and runs virtual machines.",
      "A virtual machine itself.",
      "A container runtime."
    ],
    correctAnswer: 1,
    explanation: "A hypervisor, or virtual machine monitor (VMM), is the software layer that enables virtualization. It is responsible for allocating and managing hardware resources among various VMs."
  },
  {
    id: 117,
    question: "The difference between a Type-1 and Type-2 hypervisor is:",
    options: [
      "Type-1 runs on bare metal, while Type-2 runs on top of a conventional host OS.",
      "Type-2 runs on bare metal, while Type-1 runs on a host OS.",
      "Type-1 is for servers, and Type-2 is for desktops.",
      "Type-1 is software-based, while Type-2 is hardware-based."
    ],
    correctAnswer: 0,
    explanation: "Type-1 (Bare Metal) hypervisors like VMware ESXi run directly on the host's hardware. Type-2 (Hosted) hypervisors like VirtualBox run as an application on an existing OS."
  },
  {
    id: 118,
    question: "What is the fundamental difference between a container and a virtual machine?",
    options: [
      "Containers virtualize the OS, while VMs virtualize the underlying hardware.",
      "VMs are more lightweight than containers.",
      "Containers require a separate hypervisor for each container.",
      "VMs share the host OS kernel."
    ],
    correctAnswer: 0,
    explanation: "A VM runs a full guest OS on top of a hypervisor. A container shares the host system's kernel and packages just the application and its dependencies, making it much more lightweight and faster."
  },
  {
    id: 119,
    question: "Which Linux kernel features are fundamental to containerization?",
    options: [
      "System calls and signals.",
      "Namespaces and Control Groups (cgroups).",
      "The proc filesystem and kernel modules.",
      "Sockets and RPC."
    ],
    correctAnswer: 1,
    explanation: "Namespaces provide isolation for a container's view of the system (PIDs, network, etc.). Control Groups (cgroups) limit and account for the resource usage (CPU, memory, etc.) of the container."
  },
  {
    id: 120,
    question: "'Paravirtualization' refers to:",
    options: [
      "A technique where the guest OS is modified to be aware it is running on a hypervisor.",
      "Emulating hardware completely in software.",
      "Running a hypervisor inside another hypervisor.",
      "A technique for securing virtual machines."
    ],
    correctAnswer: 0,
    explanation: "In paravirtualization, the guest OS is aware it is virtualized and makes special calls (hypercalls) to the hypervisor, avoiding the overhead of emulating hardware for certain operations and improving performance."
  },
  {
    id: 121,
    question: "What is a key feature of a Multilevel Feedback Queue Scheduler?",
    options: [
      "Processes are permanently assigned to a single queue.",
      "It allows processes to move between queues based on their CPU burst behavior.",
      "It only uses the FCFS scheduling algorithm.",
      "It is primarily used for batch systems."
    ],
    correctAnswer: 1,
    explanation: "A Multilevel Feedback Queue Scheduler allows a process to move between queues. For instance, if a process uses too much CPU time, it can be moved to a lower-priority queue. This allows the scheduler to adapt to process behavior."
  },
  {
    id: 122,
    question: "What defines a Symmetric Multiprocessing (SMP) system?",
    options: [
      "Each processor is assigned a specific task, and a master processor controls the system.",
      "All processors are peers, and each can run the OS kernel and user processes.",
      "Only one processor can access the system's I/O devices.",
      "Processors do not share memory."
    ],
    correctAnswer: 1,
    explanation: "In SMP architecture, two or more identical processors are connected to a single, shared main memory. All processors are treated as equals and can run any task, including OS code. This is the most common multiprocessor architecture."
  },
  {
    id: 123,
    question: "In an Asymmetric Multiprocessing (ASMP) system:",
    options: [
      "All processors are identical and share all tasks.",
      "A master-slave relationship exists, where one processor (the master) schedules work for the slaves.",
      "The system is less reliable than an SMP system.",
      "Each processor has its own private memory."
    ],
    correctAnswer: 1,
    explanation: "ASMP involves a setup where not all processors are treated equally. One master processor controls the system and allocates work to the other slave processors. This is simpler than SMP but can cause a bottleneck at the master."
  },
  {
    id: 124,
    question: "What is processor affinity?",
    options: [
      "A scheduler's tendency to keep a process running on the same processor.",
      "The speed at which a processor can execute instructions.",
      "The physical connection between a processor and memory.",
      "A hardware feature that allows processors to communicate."
    ],
    correctAnswer: 0,
    explanation: "Processor affinity aims to improve performance by keeping a process on the same CPU to take advantage of data already in that CPU's cache. Migrating the process would invalidate this cache."
  },
  {
    id: 125,
    question: "Load balancing in a multiprocessor system is the activity of:",
    options: [
      "Ensuring that all processes have the same priority.",
      "Distributing the workload evenly among all available processors.",
      "Balancing the power consumption of the processors.",
      "Ensuring all I/O devices are equally busy."
    ],
    correctAnswer: 1,
    explanation: "Load balancing is essential for performance in an SMP system. Its goal is to keep all processors as busy as possible by distributing processes from overloaded processors to idle or less-busy processors."
  },
  {
    id: 126,
    question: "What is an inverted page table?",
    options: [
      "A page table where entries are sorted by frame number instead of page number.",
      "A page table that is stored on disk instead of in memory.",
      "A page table that maps physical addresses to logical addresses.",
      "A global page table that has one entry for each physical frame of memory."
    ],
    correctAnswer: 3,
    explanation: "Instead of one page table per process, an inverted page table has a single system-wide table with an entry for each physical frame. This reduces the memory needed for page tables but can make lookups more complex."
  },
  {
    id: 127,
    question: "How are memory-mapped files used?",
    options: [
      "To map a file's contents into the virtual address space of a process.",
      "To create a map of all files on the file system.",
      "To store memory contents to a file during hibernation.",
      "To link multiple files together."
    ],
    correctAnswer: 0,
    explanation: "Memory-mapping a file maps a portion of a file on disk to a range of virtual addresses. The process can then access the file's contents directly through memory pointers, avoiding the overhead of read() and write() system calls."
  },
  {
    id: 128,
    question: "The 'buddy system' is a memory allocation algorithm that:",
    options: [
      "Allocates memory to pairs of processes.",
      "Divides memory into fixed-size partitions.",
      "Allocates memory from a block by breaking it down by powers of 2.",
      "Uses a best-fit approach to find memory holes."
    ],
    correctAnswer: 2,
    explanation: "The buddy system is a memory allocation scheme that divides memory into blocks of sizes that are powers of two. When a request is made, a block is located, potentially by splitting a larger block. This makes merging free blocks very efficient."
  },
  {
    id: 129,
    question: "What is a slab allocator?",
    options: [
      "A memory allocation scheme that uses large, contiguous blocks of memory.",
      "A cache-based allocator for frequent allocations of kernel objects.",
      "An allocator used exclusively for user-space applications.",
      "Another name for the buddy system."
    ],
    correctAnswer: 1,
    explanation: "The slab allocator is a memory management mechanism for efficient allocation of kernel objects (like inodes). It creates 'caches' for different object types, each consisting of 'slabs' of pre-initialized objects, avoiding overhead."
  },
  {
    id: 130,
    question: "In disk scheduling, what is seek time?",
    options: [
      "The time it takes for the data to rotate under the disk head.",
      "The time it takes for the disk arm to move the heads to the correct cylinder.",
      "The time it takes to transfer data from the disk to memory.",
      "The total time to service a disk request."
    ],
    correctAnswer: 1,
    explanation: "Seek time is the time required to move the disk's read/write head to the correct track or cylinder. Disk scheduling algorithms aim to minimize total seek time as it is a dominant factor in I/O performance."
  },
  {
    id: 131,
    question: "The SCAN (or elevator) disk scheduling algorithm:",
    options: [
      "Services requests in the order they arrive.",
      "Moves the disk arm from one end to the other, servicing requests, and then reverses direction.",
      "Jumps to the request closest to the current head position.",
      "Moves the disk arm one way, then immediately returns to the start without servicing on the return trip."
    ],
    correctAnswer: 1,
    explanation: "The SCAN algorithm works like an elevator, moving the disk arm in one direction and servicing all requests in its path until it reaches the end of the disk, at which point it reverses direction."
  },
  {
    id: 132,
    question: "How does the C-SCAN (Circular SCAN) algorithm differ from SCAN?",
    options: [
      "It is less efficient than SCAN.",
      "It scans in a circular motion.",
      "After reaching the end, it immediately returns to the beginning without servicing requests on the return trip.",
      "It only services requests in a specific circular region of the disk."
    ],
    correctAnswer: 2,
    explanation: "C-SCAN provides a more uniform waiting time. The head moves from one end to the other, servicing requests. When it reaches the end, it immediately returns to the beginning without servicing any requests on the return trip."
  },
  {
    id: 133,
    question: "What is the main purpose of a device driver?",
    options: [
      "To provide a uniform interface for the kernel to interact with specific hardware.",
      "To directly control the CPU.",
      "To manage file system permissions.",
      "To provide power to a hardware device."
    ],
    correctAnswer: 0,
    explanation: "A device driver is a kernel component that encapsulates the details of a particular hardware device. It translates the generic I/O requests from the kernel into the specific commands that the device's controller understands."
  },
  {
    id: 134,
    question: "A character device is one that:",
    options: [
      "Transfers data as a stream of bytes, one at a time.",
      "Transfers data in fixed-size blocks.",
      "Is used for storing text files only.",
      "Can only be accessed sequentially."
    ],
    correctAnswer: 0,
    explanation: "A character device (e.g., a keyboard, mouse) delivers or accepts a stream of characters, without regard to any block structure. A block device (e.g., a hard disk) transfers data in fixed-size blocks."
  },
  {
    id: 135,
    question: "What is the key difference between a system call and a library call?",
    options: [
      "Library calls are always faster.",
      "A system call is a request to the OS kernel, while a library call is a function call in user-space.",
      "You can only make system calls from the C programming language.",
      "Library calls do not have return values."
    ],
    correctAnswer: 1,
    explanation: "A system call is the programmatic interface to the services provided by the OS, involving a context switch to kernel mode. A library call is a function call to a library of code linked with the user program. A library call may in turn make a system call."
  },
  {
    id: 136,
    question: "What is the main purpose of the system boot process (bootstrapping)?",
    options: [
      "To install the operating system.",
      "To initialize system hardware and load the OS kernel into memory to begin execution.",
      "To run diagnostic checks on the hardware.",
      "To log in the user."
    ],
    correctAnswer: 1,
    explanation: "The boot process is the sequence that starts with firmware (BIOS/UEFI), which loads a bootloader. The bootloader is then responsible for loading the OS kernel into memory and handing over control to it."
  },
  {
    id: 137,
    question: "What does 'atomicity' mean in the context of an operation?",
    options: [
      "The operation is very small.",
      "The operation is guaranteed to execute as a single, indivisible unit.",
      "The operation can be undone.",
      "The operation is part of the OS kernel."
    ],
    correctAnswer: 1,
    explanation: "An atomic operation is an uninterruptible unit of work that either completes successfully in its entirety, or has no effect at all. This is crucial for synchronization and preventing race conditions."
  },
  {
    id: 138,
    question: "What is the main advantage of a microkernel architecture over a monolithic one?",
    options: [
      "Higher performance due to fewer context switches.",
      "Simpler communication between system components.",
      "Improved security, reliability, and modularity.",
      "Smaller memory footprint."
    ],
    correctAnswer: 2,
    explanation: "In a microkernel, services like device drivers run as user-space processes. This isolates services from each other; a failure in a driver will not crash the entire OS. The trade-off is often lower performance."
  },
  {
    id: 139,
    question: "What is a Condition Variable used for?",
    options: [
      "To store the state of a process.",
      "To provide mutual exclusion like a mutex.",
      "To allow threads to wait for a specific condition to become true, while protected by a mutex.",
      "To count resources like a semaphore."
    ],
    correctAnswer: 2,
    explanation: "A condition variable allows threads to wait efficiently for a condition. It is always used with a mutex. A thread acquires the mutex, checks the condition, and if false, calls wait(), which atomically releases the mutex and sleeps."
  },
  {
    id: 140,
    question: "In the context of the OS, what is temporal locality?",
    options: [
      "The tendency for a processor to access memory locations that are close to each other.",
      "The tendency for a processor to access the same memory location again in the near future.",
      "The time it takes to access a memory location.",
      "The physical location of memory in the computer."
    ],
    correctAnswer: 1,
    explanation: "Temporal locality is a principle of locality of reference. It states that if a particular memory location is referenced, it is likely to be referenced again soon. Caching systems exploit this by keeping recently accessed data in a faster cache."
  },
  {
    id: 141,
    question: "What is a 'daemon' process in a UNIX-like system?",
    options: [
      "A process that has become a zombie.",
      "A background process that is not associated with a controlling terminal.",
      "A process running with root privileges.",
      "A process that is scheduled by the real-time scheduler."
    ],
    correctAnswer: 1,
    explanation: "A daemon is a long-running background process that answers requests for services (e.g., sshd, httpd). They are typically started at boot time and are detached from any interactive user session."
  },
  {
    id: 142,
    question: "What is the purpose of the `exec()` family of system calls?",
    options: [
      "To create a new child process.",
      "To replace the current process image with a new process image.",
      "To terminate the current process.",
      "To execute a function within the current process."
    ],
    correctAnswer: 1,
    explanation: "The `exec()` family of functions replaces the memory, data, and code of the current process with a new program. The process ID does not change. This is often used after a `fork()` call by the child process."
  },
  {
    id: 143,
    question: "What is a pipe (`|`) in a command shell?",
    options: [
      "A way to save the output of a command to a file.",
      "A form of IPC that redirects the standard output of one command to the standard input of another.",
      "A command to pause the execution of a script.",
      "A special file for communicating with device drivers."
    ],
    correctAnswer: 1,
    explanation: "A pipe is a unidirectional IPC mechanism. The `|` operator on the command line creates a pipe between two processes, allowing the output of the first to become the input of the second (e.g., `ls -l | grep .txt`)."
  },
  {
    id: 144,
    question: "What are the standard file descriptors in Linux?",
    options: [
      "0: stdin, 1: stdout, 2: stderr",
      "0: stdout, 1: stdin, 2: stderr",
      "1: stdin, 2: stdout, 3: stderr",
      "There are no standard file descriptors."
    ],
    correctAnswer: 0,
    explanation: "Every process in a Unix-like system starts with three open file descriptors: 0 for standard input (stdin), 1 for standard output (stdout), and 2 for standard error (stderr)."
  },
  {
    id: 145,
    question: "What is the role of the `sysfs` filesystem in Linux?",
    options: [
      "It is a virtual filesystem that exports information about hardware devices and drivers to user space.",
      "It is used for storing system log files.",
      "It is the primary file system for the root directory.",
      "It is a temporary in-memory filesystem."
    ],
    correctAnswer: 0,
    explanation: "sysfs provides a structured view of the devices and buses in a system as seen by the kernel. Unlike /proc (process-focused), sysfs is focused on the system's device model."
  },
  {
    id: 146,
    question: "What is `chroot` in Linux?",
    options: [
      "A command to change the root user's password.",
      "An operation that changes the apparent root directory for the current running process and its children.",
      "A tool for checking the root filesystem for errors.",
      "A command to remount the root filesystem."
    ],
    correctAnswer: 1,
    explanation: "A `chroot` jail is a security mechanism used to isolate a process by limiting its view of the filesystem. A process in a chroot environment cannot access files or commands outside of its new root directory tree."
  },
  {
    id: 147,
    question: "What is the difference between `kill` and `kill -9`?",
    options: [
      "`kill` is a request, `kill -9` is a command.",
      "`kill` sends SIGTERM (graceful shutdown), while `kill -9` sends SIGKILL (forced termination).",
      "`kill -9` is a more polite way to stop a process.",
      "`kill` can only be used by the root user."
    ],
    correctAnswer: 1,
    explanation: "SIGTERM (signal 15) is a polite request to a process to terminate, which it can catch and handle. SIGKILL (signal 9) cannot be caught or ignored; it tells the kernel to terminate the process immediately."
  },
  {
    id: 148,
    question: "What does the `strace` command do?",
    options: [
      "It displays the contents of a string variable in a program.",
      "It traces the system calls and signals of a running process.",
      "It prints the routing table for network traffic.",
      "It formats strings in a shell script."
    ],
    correctAnswer: 1,
    explanation: "`strace` is a powerful diagnostic tool that intercepts and records the system calls made by a process and the signals it receives. This is useful for understanding how a program interacts with the OS."
  },
  {
    id: 149,
    question: "In Linux, what is a 'runlevel'?",
    options: [
      "A mode of operation in the System V init process, defining which system services are running.",
      "The priority level of a running process.",
      "The version number of the Linux kernel.",
      "The amount of CPU time a process is allowed to run."
    ],
    correctAnswer: 0,
    explanation: "A runlevel is a preset state of the system defining which services are started (e.g., runlevel 3 is a multi-user text console, runlevel 5 is a graphical multi-user mode). Modern systems using systemd use 'targets' which serve a similar purpose."
  },
  {
    id: 150,
    question: "What is the 'sticky bit' permission on a directory?",
    options: [
      "It prevents anyone from deleting the directory.",
      "It makes all files created in the directory owned by the directory's group.",
      "It ensures that only a file's owner can rename or delete that file within the directory.",
      "It causes a program to stay resident in memory after execution."
    ],
    correctAnswer: 2,
    explanation: "The sticky bit is commonly used on world-writable directories like /tmp. It prevents a user from deleting or renaming files owned by other users within that directory."
  },

  {
    id: 151,
    question: "What is the 'Dining Philosophers' problem a classic example of?",
    options: [
      "A race condition.",
      "A problem of deadlock and starvation in concurrency.",
      "A CPU scheduling problem.",
      "A memory allocation problem."
    ],
    correctAnswer: 1,
    explanation: "The Dining Philosophers problem illustrates the challenge of allocating multiple resources among multiple processes in a way that avoids deadlock. A simple solution can easily lead to a circular wait (deadlock) and potential starvation."
  },
  {
    id: 152,
    question: "What is a 'futex' (Fast Userspace Mutex)?",
    options: [
      "A high-level synchronization primitive like a monitor.",
      "A mechanism that avoids expensive system calls if a lock is uncontended.",
      "A mutex that is implemented entirely in hardware.",
      "A file-based locking mechanism."
    ],
    correctAnswer: 1,
    explanation: "A futex is a Linux kernel mechanism for efficient locks. If a lock is not held by another thread, it can be acquired and released entirely in user space using atomic operations, avoiding a costly system call."
  },
  {
    id: 153,
    question: "What is 'lock-free' programming?",
    options: [
      "A programming style that avoids using locks by relying on atomic operations.",
      "Programming without any synchronization.",
      "A way to make mutexes faster.",
      "A security model that locks down a program's capabilities."
    ],
    correctAnswer: 0,
    explanation: "Lock-free programming is a technique for safely sharing data between threads without using locks. It relies on hardware-supported atomic 'compare-and-swap' (CAS) instructions to manage concurrency."
  },
  {
    id: 154,
    question: "What is a read-copy-update (RCU) mechanism?",
    options: [
      "A backup utility that copies files when they are updated.",
      "A sync mechanism allowing lock-free reads, while writers create a copy to modify.",
      "A version control system.",
      "A method for ensuring data consistency in a database."
    ],
    correctAnswer: 1,
    explanation: "RCU is a synchronization mechanism optimized for read-mostly scenarios. Readers can access a data structure without locks. Writers create a copy, modify it, and then atomically publish a pointer to the new version."
  },
  {
    id: 155,
    question: "What is the ABA problem in concurrent programming?",
    options: [
      "A type of deadlock.",
      "An anomaly where a memory location changes value and then changes back, fooling a CAS operation.",
      "An acronym for a specific scheduling algorithm.",
      "A buffer overflow vulnerability."
    ],
    correctAnswer: 1,
    explanation: "The ABA problem occurs in lock-free algorithms. A thread reads value A, but before it can perform a compare-and-swap, another thread changes the value to B and then back to A. The CAS operation then wrongly succeeds."
  },
  {
    id: 156,
    question: "What is Address Space Layout Randomization (ASLR)?",
    options: [
      "A memory allocation technique that randomizes the order of processes in memory.",
      "A security technique that randomly arranges the memory addresses of key process data areas.",
      "A method for making context switching faster.",
      "A virtual memory paging algorithm."
    ],
    correctAnswer: 1,
    explanation: "ASLR is a security technique that makes it more difficult for an attacker to predict target addresses for exploits. By randomizing the base addresses of the stack, heap, and libraries, buffer overflow attacks become harder to execute reliably."
  },
  {
    id: 157,
    question: "What is a 'sandbox' in the context of operating system security?",
    options: [
      "A directory for temporary files.",
      "A security mechanism for separating running programs in a restricted environment.",
      "A testing environment for new hardware.",
      "A tool for monitoring network traffic."
    ],
    correctAnswer: 1,
    explanation: "A sandbox provides a tightly controlled set of resources for a program to run in. Network access, filesystem access, and the ability to inspect the host system are usually heavily restricted to mitigate vulnerabilities."
  },
  {
    id: 158,
    question: "What are 'capabilities' in the context of Linux security?",
    options: [
      "A measure of a system's overall performance.",
      "A way of partitioning the privileges of the root user into a set of distinct units.",
      "A hardware feature for memory protection.",
      "A type of access control list."
    ],
    correctAnswer: 1,
    explanation: "Capabilities break down the power of the root user into smaller, distinct privileges (e.g., CAP_NET_BIND_SERVICE). This allows a process to be given only the specific privilege it needs, following the principle of least privilege."
  },
  {
    id: 159,
    question: "What is a Time-of-Check to Time-of-Use (TOCTOU) bug?",
    options: [
      "A bug in the system clock driver.",
      "A race condition vulnerability where a resource's state changes between being checked and being used.",
      "An error that occurs when a program runs for too long.",
      "A vulnerability in network time protocols."
    ],
    correctAnswer: 1,
    explanation: "A TOCTOU bug is a race condition where a program checks a condition (e.g., file permissions) and then performs an action based on that check, but an attacker can change the condition in between the check and the action."
  },
  {
    id: 160,
    question: "What is the main purpose of SELinux (Security-Enhanced Linux)?",
    options: [
      "To provide a firewall for network connections.",
      "To implement Mandatory Access Control (MAC) policies in the Linux kernel.",
      "To encrypt the user's home directory.",
      "To scan for viruses and malware."
    ],
    correctAnswer: 1,
    explanation: "SELinux adds Mandatory Access Control (MAC) to the OS, where a system-wide policy dictates access rights. Even the root user cannot bypass SELinux policies, providing a stronger security model than standard Discretionary Access Control (DAC)."
  },
  {
    id: 161,
    question: "What information is typically provided by the `top` command?",
    options: [
      "The file system hierarchy.",
      "A real-time view of running processes, including their CPU and memory usage.",
      "A list of logged-in users.",
      "The system's network configuration."
    ],
    correctAnswer: 1,
    explanation: "`top` is a performance monitoring tool that provides a dynamic, real-time summary of the system's state, including uptime, load average, and a list of the most resource-intensive processes."
  },
  {
    id: 162,
    question: "What is the difference between resident memory and virtual memory for a process?",
    options: [
      "Resident memory is on disk; virtual memory is in RAM.",
      "Resident memory is the part of a process in RAM; virtual memory is its total address space.",
      "They are the same thing.",
      "Resident memory is for the kernel; virtual memory is for user processes."
    ],
    correctAnswer: 1,
    explanation: "A process's virtual memory size is its total address space, including swapped-out pages. Its resident set size (RSS) is the subset of that memory that is actually in physical RAM at any given moment."
  },
  {
    id: 163,
    question: "What is I/O wait (`wa` in top's CPU stats)?",
    options: [
      "The percentage of time the CPU was idle.",
      "The percentage of time the CPU was executing user code.",
      "The percentage of time the CPU was idle while the system had a pending disk I/O request.",
      "The percentage of time the CPU was executing kernel code."
    ],
    correctAnswer: 2,
    explanation: "I/O wait is the time the CPU is forced to be idle because it is waiting for an I/O operation (e.g., disk read) to complete. A high iowait value often indicates a storage bottleneck."
  },
  {
    id: 164,
    question: "What is the purpose of the `vmstat` command?",
    options: [
      "To manage virtual machines.",
      "To report virtual memory statistics, including processes, memory, paging, block I/O, and CPU activity.",
      "To configure the system's virtual memory settings.",
      "To display the status of running services."
    ],
    correctAnswer: 1,
    explanation: "`vmstat` (virtual memory statistics) is a powerful tool for getting a snapshot of overall system performance, including memory, swap, I/O, and CPU scheduling information."
  },
  {
    id: 165,
    question: "What is a 'context switch' count, and why is it important for performance?",
    options: [
      "The number of times the CPU switches from user to kernel mode.",
      "The number of times the OS switches the CPU from one process/thread to another.",
      "The number of times a program's context menu is displayed.",
      "The number of active network connections."
    ],
    correctAnswer: 1,
    explanation: "Each context switch has an overhead cost. A very high rate of context switching can degrade performance because the CPU spends a significant amount of time scheduling instead of doing useful work. It can be a symptom of I/O bottlenecks or lock contention."
  },
  {
    id: 166,
    question: "What is an exokernel?",
    options: [
      "A kernel that runs outside the main computer.",
      "A minimal kernel that securely multiplexes hardware, allowing applications to manage their own resources.",
      "A kernel designed specifically for cloud computing.",
      "Another name for a monolithic kernel."
    ],
    correctAnswer: 1,
    explanation: "An exokernel provides the absolute minimum of abstractions. It gives applications direct but controlled access to hardware resources, allowing them to implement their own abstractions (like file systems) more efficiently via library OSes."
  },
  {
    id: 167,
    question: "What is 'huge pages' support in an OS?",
    options: [
      "A feature that makes the text size larger on the console.",
      "A feature allowing the MMU to use larger page sizes (e.g., 2MB) to reduce TLB misses.",
      "A way to create very large swap files.",
      "A debugging tool for memory leaks."
    ],
    correctAnswer: 1,
    explanation: "Huge pages allow a single TLB entry to map a much larger region of memory (e.g., 2MB instead of 4KB), significantly improving performance for memory-intensive applications like databases by reducing TLB misses."
  },
  {
    id: 168,
    question: "What is a lightweight process (LWP)?",
    options: [
      "A process with very low memory usage.",
      "An intermediate data structure that maps user-level threads to kernel-level threads.",
      "A process that cannot make system calls.",
      "Another name for a user-level thread."
    ],
    correctAnswer: 1,
    explanation: "In many-to-many thread models, an LWP is the kernel's representation of a flow of execution. A user-level thread library schedules its threads to run on an available pool of LWPs."
  },
  {
    id: 169,
    question: "What is the purpose of the `wait()` system call?",
    options: [
      "To pause a process for a specified amount of time.",
      "To make a process wait for an I/O operation to complete.",
      "To suspend the execution of a parent process until one of its child processes terminates.",
      "To wait for a network connection."
    ],
    correctAnswer: 2,
    explanation: "The `wait()` system call allows a parent process to synchronize with its children. It suspends the parent until a child terminates, allowing the parent to collect the child's exit status and the kernel to clean up the zombie process."
  },
  {
    id: 170,
    question: "What is a file descriptor leak?",
    options: [
      "When a file's contents are read by an unauthorized process.",
      "A bug where a program repeatedly opens files or sockets but fails to close them.",
      "When a file is deleted while a process still has it open.",
      "A security vulnerability that exposes file metadata."
    ],
    correctAnswer: 1,
    explanation: "A file descriptor leak is a resource leak where a program fails to close descriptors. Long-running processes can eventually exhaust the system's limit, leading to a failure where they can no longer open new files or connections."
  },
  {
    id: 171,
    question: "Which statement best describes the difference between a Mutex and a Binary Semaphore?",
    options: [
      "They are functionally identical.",
      "A mutex should only be unlocked by the thread that locked it, which is not required for a semaphore.",
      "A binary semaphore can be acquired recursively, while a mutex cannot.",
      "A mutex is a user-space construct, while a semaphore is always a kernel object."
    ],
    correctAnswer: 1,
    explanation: "The concept of 'ownership' is central to a mutex: the same thread that acquires the lock must be the one to release it. A binary semaphore is a more general signaling mechanism and does not have this ownership constraint."
  },
  {
    id: 172,
    question: "The primary difference in the goals of Paging and Segmentation is:",
    options: [
      "Paging provides a logical view, while segmentation eliminates external fragmentation.",
      "Paging eliminates external fragmentation; segmentation matches the programmer's logical view of a program.",
      "Paging is faster than segmentation.",
      "Segmentation is implemented in hardware, while paging is purely software."
    ],
    correctAnswer: 1,
    explanation: "Paging's main goal is to solve the memory allocation problem of external fragmentation by using fixed-size blocks. Segmentation's goal is to provide a memory model that maps to how a programmer views their code (code, data, stack)."
  },
  {
    id: 173,
    question: "Which of the following best contrasts Process and Thread scheduling?",
    options: [
      "Process scheduling is always preemptive, while thread scheduling is not.",
      "Process scheduling manages separate address spaces; thread scheduling manages execution units within a shared address space.",
      "Threads are scheduled by the long-term scheduler; processes by the short-term scheduler.",
      "Only processes can be I/O-bound."
    ],
    correctAnswer: 1,
    explanation: "Process scheduling is 'heavyweight' as it involves saving and restoring the entire context of a separate address space. Thread scheduling is 'lightweight' as the context switch happens within the same address space."
  },
  {
    id: 174,
    question: "What is the fundamental trade-off in Round Robin scheduling?",
    options: [
      "Throughput vs. fairness.",
      "The size of the time quantum: too small leads to high overhead, too large makes it behave like FCFS.",
      "CPU utilization vs. memory usage.",
      "Starvation vs. aging."
    ],
    correctAnswer: 1,
    explanation: "The performance of RR depends on the time quantum. If it's too small, the overhead of context switching becomes significant. If it's too large, the algorithm degenerates to First-Come, First-Served, which is poor for interactive response time."
  },
  {
    id: 175,
    question: "How does Deadlock Avoidance differ from Deadlock Prevention?",
    options: [
      "Prevention is a more dynamic approach than avoidance.",
      "Prevention ensures a deadlock condition can never hold; avoidance uses future requests to stay in a 'safe state'.",
      "Avoidance requires killing processes, while prevention does not.",
      "Prevention uses the Banker's Algorithm, while avoidance uses resource allocation graphs."
    ],
    correctAnswer: 1,
    explanation: "Prevention involves imposing strict rules on resource requests. Avoidance is more dynamic; it requires processes to declare maximum needs and uses an algorithm to check if granting a request will keep the system in a safe state."
  },
  {
    id: 176,
    question: "A web server forks a new child process for each connection. What is a problem with this model under high traffic?",
    options: [
      "It is not possible to fork more than 100 processes.",
      "The overhead of creating a new process for every request can become very high.",
      "Each child process will have a different IP address.",
      "Forking is not a secure operation."
    ],
    correctAnswer: 1,
    explanation: "Creating a process (forking) is an expensive operation. Under heavy load, this can overwhelm the system. Modern servers often use a thread-based or event-driven model to handle many connections within fewer processes."
  },
  {
    id: 177,
    question: "You notice a system's load average is very high, but CPU utilization is very low. What is the most likely bottleneck?",
    options: [
      "The system has too little RAM.",
      "The system is heavily I/O bound (e.g., waiting for slow disk or network responses).",
      "The CPU's clock speed is too slow.",
      "There are too many running processes competing for CPU."
    ],
    correctAnswer: 1,
    explanation: "Load average reflects processes in the run queue OR in an uninterruptible sleep state (waiting for I/O). If the CPU is not busy, but the load is high, it means many processes are in that waiting state, pointing to an I/O bottleneck."
  },
  {
    id: 178,
    question: "You are designing a system to control a medical device where a missed deadline would be catastrophic. What type of OS is required?",
    options: [
      "A time-sharing OS like Linux.",
      "A batch processing OS.",
      "A hard real-time OS (RTOS).",
      "A distributed OS."
    ],
    correctAnswer: 2,
    explanation: "This scenario describes a hard real-time system. The key requirement is predictability. A hard RTOS guarantees that tasks will be completed within their specified deadlines. A failure to meet a deadline constitutes a total system failure."
  },
  {
    id: 179,
    question: "Why might a programmer use memory-mapped I/O over standard read()/write() for a large file?",
    options: [
      "To avoid using the virtual memory system.",
      "To simplify code and potentially improve performance by avoiding buffer copies between kernel and user space.",
      "Because read() and write() do not work on files larger than 4GB.",
      "To ensure the file is never cached."
    ],
    correctAnswer: 1,
    explanation: "With memory mapping, the file's pages can be mapped directly into the process's address space. The application can access the data directly without an intermediate copy between kernel and user buffers, which can be more efficient."
  },
  {
    id: 180,
    question: "A process has been running for an hour, but `ps` reports its CPU time as 2 seconds. What does this imply?",
    options: [
      "The `ps` command is broken.",
      "The process has been sleeping or waiting for I/O for the vast majority of its existence.",
      "The process has a very low priority and is being starved.",
      "The system clock is inaccurate."
    ],
    correctAnswer: 1,
    explanation: "CPU time reflects the total time the process was actually executing on a CPU. A large discrepancy between CPU time and wall-clock time indicates the process spent most of its life in a non-running state (e.g., waiting for input)."
  },
  {
    id: 181,
    question: "The 'working set' of a process is:",
    options: [
      "The set of all pages the process will ever need.",
      "The set of pages that a process is currently and actively using.",
      "The set of pages that have been swapped out to disk.",
      "The set of shared library pages used by the process."
    ],
    correctAnswer: 1,
    explanation: "The working set model assumes processes exhibit locality of reference. The working set is the set of pages the process has accessed in a recent time window. To prevent thrashing, the system should ensure working sets fit in physical memory."
  },
  {
    id: 182,
    question: "Which of these is a primary goal of an I/O scheduling algorithm for a hard disk?",
    options: [
      "To maximize CPU utilization.",
      "To minimize disk head movement (seek time).",
      "To increase the rotational speed of the disk.",
      "To ensure all I/O requests are handled in FCFS order."
    ],
    correctAnswer: 1,
    explanation: "For mechanical hard drives, the most time-consuming part of an I/O operation is physically moving the read/write head. Disk scheduling algorithms like SCAN and C-SCAN re-order I/O requests to minimize total head movement."
  },
  {
    id: 183,
    question: "What is the main function of an MMU (Memory Management Unit)?",
    options: [
      "To manage the allocation of memory to new processes.",
      "To translate virtual (logical) addresses to physical addresses.",
      "To perform context switches.",
      "To cache frequently used data from the disk."
    ],
    correctAnswer: 1,
    explanation: "The MMU is a hardware component that takes the logical address generated by the CPU and, using page tables, translates it into a physical address in RAM. It is also responsible for enforcing memory protection."
  },
  {
    id: 184,
    question: "In a system with a single-core CPU, what is the main purpose of concurrency?",
    options: [
      "To execute multiple processes at exactly the same time.",
      "To improve performance by allowing progress on one task while another is blocked on I/O.",
      "To make the hardware simpler.",
      "To reduce the system's memory usage."
    ],
    correctAnswer: 1,
    explanation: "On a single core, you can only have concurrency, not true parallelism. If one process needs to wait for slow I/O, the OS can switch to another process, keeping the CPU busy and improving overall system throughput and responsiveness."
  },
  {
    id: 185,
    question: "The `ioctl` system call in Unix-like systems is a:",
    options: [
      "Generic function for device-specific I/O operations that don't fit the read/write model.",
      "Command to install a new device driver.",
      "Function to check the status of all I/O devices.",
      "A way to control CPU settings."
    ],
    correctAnswer: 0,
    explanation: "`ioctl` (Input/Output Control) is a single system call that acts as a gateway for many different device-specific operations, like ejecting a CD or setting configuration parameters on a network card."
  },
  {
    id: 186,
    question: "What is a 'livelock'?",
    options: [
      "A synonym for deadlock.",
      "A situation where processes actively change state in response to each other but make no useful progress.",
      "A process that is stuck in an infinite loop in user space.",
      "A security feature that locks a user out after too many failed login attempts."
    ],
    correctAnswer: 1,
    explanation: "A livelock is similar to a deadlock in that no progress is made. However, the processes are not blocked; they are actively consuming CPU cycles trying to resolve a conflict, but failing to do so."
  },
  {
    id: 187,
    question: "What is demand cleaning in virtual memory?",
    options: [
      "The policy of writing a modified (dirty) page to disk only when that page is selected for replacement.",
      "The policy of pre-cleaning pages by writing dirty pages to disk before their frame is needed.",
      "A utility that removes unused pages from memory.",
      "Wiping a page with zeros before allocating it to a process for security."
    ],
    correctAnswer: 0,
    explanation: "Demand cleaning is a 'lazy' approach. A modified page is not written back to the backing store until its frame is needed for another page. This can create a longer delay when a page fault occurs for that frame."
  },
  {
    id: 188,
    question: "True or False: A user-level thread can be scheduled by the kernel directly.",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 1,
    explanation: "False. User-level threads are managed entirely by a thread library in user space. The kernel is unaware of their existence; it only sees and schedules the kernel-level thread(s) that the user threads are running on."
  },
  {
    id: 189,
    question: "What does the 'dirty bit' in a page table entry signify?",
    options: [
      "The page has been referenced recently.",
      "The page is invalid and cannot be accessed.",
      "The page has been modified since it was loaded into memory.",
      "The page is currently being accessed by an I/O device."
    ],
    correctAnswer: 2,
    explanation: "The dirty bit is set by the MMU whenever a write operation is performed on a page. When the OS needs to swap a page out, if the bit is not set (the page is 'clean'), it doesn't need to be written to disk, saving an I/O operation."
  },
  {
    id: 190,
    question: "What is a core dump?",
    options: [
      "A backup of the entire operating system kernel.",
      "The recorded state of a program's memory at the time it crashed.",
      "A log of all system calls made by a program.",
      "A performance summary of a CPU core."
    ],
    correctAnswer: 1,
    explanation: "A core dump file is a memory snapshot of a crashed process. It is a critical tool for post-mortem debugging, as a developer can load it into a debugger to inspect the program's state at the moment it failed."
  },
  {
    id: 191,
    question: "What is the primary purpose of I/O buffering within the operating system?",
    options: [
      "To increase the effective storage capacity of a disk.",
      "To cope with speed mismatches between devices and to batch small transfers into larger ones.",
      "To encrypt all data before it is written to a physical device.",
      "To provide a temporary storage area for files that are about to be deleted."
    ],
    correctAnswer: 1,
    explanation: "I/O buffering helps cope with speed differences (e.g., between CPU and disk) and allows the OS to group multiple small write requests from an application into a single, larger, more efficient write to the physical device."
  },
  {
    id: 192,
    question: "What is the function of the Virtual File System (VFS) layer?",
    options: [
      "To manage the paging file (swap space) for the virtual memory system.",
      "To create virtual hard disks for use by virtual machines.",
      "To provide a uniform interface so programs can use the same system calls for any type of filesystem.",
      "It is the part of the kernel that specifically handles the ext4 filesystem."
    ],
    correctAnswer: 2,
    explanation: "The VFS is a software layer in the kernel that provides a common interface for different filesystem implementations (ext4, NTFS, NFS, etc.), allowing user programs to use standard system calls like `open` and `read` on any of them."
  },
  {
    id: 193,
    question: "Which statement best describes the difference between synchronous and asynchronous I/O?",
    options: [
      "Synchronous I/O is always faster because it is more direct.",
      "In synchronous I/O, the process is blocked until I/O completes; in asynchronous I/O, the call returns immediately.",
      "Asynchronous I/O can only be used for network operations.",
      "Synchronous I/O is managed by the kernel, while asynchronous I/O is managed in user space."
    ],
    correctAnswer: 1,
    explanation: "A synchronous `read()` call will not return control to the application until the data is available. An asynchronous `read()` call will initiate the read and return immediately, allowing the application to do other work and be notified later."
  },
  {
    id: 194,
    question: "Why is a system call a high-overhead operation compared to a regular function call?",
    options: [
      "Because all system calls must be written to a log file on the disk.",
      "Because it requires a mandatory network check with a time server.",
      "Because it requires a context switch from user mode to kernel mode and back.",
      "Because kernel code is interpreted, not compiled, making it slower."
    ],
    correctAnswer: 2,
    explanation: "A system call must cross the user/kernel protection boundary. This involves a hardware trap, saving the user registers, switching to a kernel stack, executing the kernel code, and then reversing the process to return. This is significantly more work than a simple function call."
  },
  {
    id: 195,
    question: "A 'unikernel' is best described as:",
    options: [
      "A kernel that has been stripped of all device drivers.",
      "A specialized, single-address-space machine image created by linking an application with only the OS libraries it needs.",
      "The original kernel from the first version of UNIX.",
      "A kernel that can only support a single user at a time."
    ],
    correctAnswer: 1,
    explanation: "Unikernels are a modern approach where the application and necessary OS components are compiled into a single, minimal, bootable image. This eliminates the user/kernel mode distinction, reduces the attack surface, and allows for high optimization."
  },
  {
    id: 196,
    question: "The Spectre and Meltdown vulnerabilities are famous examples of what class of attack?",
    options: [
      "Buffer overflow attacks.",
      "Denial-of-service attacks.",
      "Side-channel attacks.",
      "SQL injection attacks."
    ],
    correctAnswer: 2,
    explanation: "A side-channel attack exploits physical effects of the system's execution. Spectre and Meltdown exploit the observable side effects of the CPU's speculative execution (e.g., what data gets loaded into the cache) to read memory that should be inaccessible."
  },
  {
    id: 197,
    question: "For transferring large data between two processes on the same machine, which IPC mechanism is most performant?",
    options: [
      "Signals",
      "Pipes",
      "Message Queues",
      "Shared Memory"
    ],
    correctAnswer: 3,
    explanation: "Shared memory is the fastest form of IPC because it eliminates the need for the kernel to be an intermediary and avoids copying data. Once set up, processes can read and write to the shared segment at full memory speed."
  },
  {
    id: 198,
    question: "What is the distinct role of the system's firmware (BIOS/UEFI) in the boot process?",
    options: [
      "To load the operating system kernel and all necessary device drivers.",
      "To perform the Power-On Self-Test (POST) and hand off control to the bootloader.",
      "To provide a secure, encrypted environment for the operating system to run in.",
      "To manage user login authentication before the OS starts."
    ],
    correctAnswer: 1,
    explanation: "The firmware is the very first software that runs. Its job is to initialize low-level hardware (POST) and then find and execute the next stage of the boot process, which is the bootloader (e.g., GRUB) on a bootable device."
  },
  {
    id: 199,
    question: "An operation is said to be 'idempotent' if:",
    options: [
      "It can be performed only once.",
      "Performing it once has the exact same effect as performing it multiple times.",
      "It is guaranteed to be uninterruptible (atomic).",
      "It can be reversed or undone."
    ],
    correctAnswer: 1,
    explanation: "Idempotency is a property where repeating an operation does not produce a different result. For example, setting a file's permissions to 644 is idempotent; running the command ten times has the same end result as running it once."
  },
  {
    id: 200,
    question: "What is the ultimate role of the OS when viewed as a 'Resource Manager' and 'Extended Machine'?",
    options: [
      "To ensure that the computer can run video games at the highest possible frame rate.",
      "To provide a secure environment that is completely immune to all viruses and malware.",
      "To manage hardware resources fairly, while providing applications with a simpler, more powerful set of abstract services.",
      "To provide a set of development tools like compilers and debuggers."
    ],
    correctAnswer: 2,
    explanation: "This summarizes the dual nature of an OS. As a Resource Manager, it arbitrates access to hardware. As an Extended Machine, it hides low-level hardware details and provides clean abstractions like files, processes, and sockets."
  }
];
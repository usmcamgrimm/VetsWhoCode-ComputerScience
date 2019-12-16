DAY 2
Week 9 - Comp Sci with Javascript
-------------------------

Data Types and Structures
-------------------------

[Algorithm Video - Give this one a chance. It’s not bad at all.](https://www.youtube.com/watch?v=rL8X2mlNHPM)


_Articles below_

---

**What Do we mean by Algorithms?**

**Definition:**
A specific set of instructions a computer takes to solve a problem
We’ve been writing algorithms this whole time for the most part
Most functions are algorithms, just a simple multiplication is algorithm

**Why are they important?**

CS is the study, not of coding, but of how computers solve problems, and which ones they are able to solve.

When we write a few lines of code, we don’t think about the paradigm, or methodology of the code, but many complex problems require paradigms to solve

- _Otherwise, they become insolvable, or a MASSIVE Big O_

[Article (types of CS problems)](http://www.multiwingspan.co.uk/a23.php?page=types)

(Don’t focus too much on next few sections, it’s very “academic”, but at the core of Algorithms)

**Scientific Classification of problems**

* P = Polynomial time (ezpz!)
* NP = Non-deterministic time (requires thought+)
* NP-Hard, NP-Complete, see below

[More (careful, this shit is heavy)](https://en.wikipedia.org/wiki/NP-completeness)

**Does P == NP? - Biggest Question Mark in CS**
[Awesome Stack Overflow response](https://stackoverflow.com/questions/111307/whats-p-np-and-why-is-it-such-a-famous-question)

_If P == NP... Online banking encryption is FINISHED._

---

## Here are a list of methods/techniques to solve various Algorithms:

**Algorithms with Numbers (number theory)**

* Primality test
* Cryptography, etc

**Divide and Conquer Algorithms**

* Multiplication! (Karatsuba reduces Big O)
* Matrix Multiplication
* Other, complex shit

**Graph Theory, Decomposition of Graphs**

* Paths in Graphs
* Depth first Search
* Breadth first search

**Greedy Algorithms**

* Algorithms which don’t go through all possible outcomes
* They just find something they like and return (“greedy”)

**Dynamic Programming**

* Memoization (like a toddler pronouncing memorization - there’s no “r”)
* Sacrificing Memory for time
* Stores Previous values to use again and again
* Rather than re-computing them

**Linear Programming / Reductions**

* Optimization problems, given “constraints”
* I.E., Given a,b,c, find the best ‘b’, given a,c has to be blah blah

**NP-Completeness**

* Local Search problems
* Approximation algorithms

**Quantum Algorithms (Yes I was taught this - nobody knew what the f\*ck was going on)**

* This is a 4am wikipedia/youtube binge watch

---

Don’t hesitate to ask me anything about any of the things above.

I’m just not going to go deep into this and discourage you guys with a lecture on CS Academia.

Caveat: This was the hardest topic of my undergraduate. 

The math, the formulas, the topics... all of it.

This is non-trivial, as in this shit is hard to understand. 

With that said, let’s focus:

---

So what’s our focus? - Algorithms!
Just not the crazy complex kind.
We are here to improve our general knowledge and get more comfortable with code.
That starts with being given a problem, and solving
You do not have to be an expert in anything above
They are for your own knowledge
Nobody in frontend development is using the above, and if they are, they are senior-level.
You’re here to get exposure, practice, and get a job.

Lets get to it:

---

## Assignment
**1. (Easy) - Prime Number Test for any integer!**

* Also do the first “n” primes - Write your Big O for both!
* We will re-visit this next week

**2. (Medium) - Integer to String**

* Given any positive OR negative integer, returns it as a String
* NO BUILT-INs
* And obviously no JS type inferencing magic.

**3. (“Hard”) - GCD - Greatest Common Divisor, can be Euclid’s Algorithm**

* Given two integers, a and b, find the largest integer that divides them both (GCD).
* Euclid’s algorithm is well-known, but don’t copy - your own detriment!
* Try to solve this on your own first! Only use “hints” when you have to.
* How could you break down each number?

_If “Hard” was too easy you should be on Hackerrank or leetcode and getting those problems done._

**Bonus:**

* Every integer can be broken down into factors of prime numbers and ONLY prime numbers.
* Implement this function - given a positive integer, output it’s prime factors
* I.E., Given 28 = “7 _ 2 _ 2” (note, 7 and 2 are all prime numbers)
* Output should look like that: (7 _ 2 _ 2)

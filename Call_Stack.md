# Day Three #

## The Call Stack ##

**What is a "Stack"? What is a "Call Stack"?**

_Think of how you fold clothes:_

* First one goes down
* Next one on top
* And the next
* ...
* Which article of clothing is the most accessible?

**Colt Steele Video:**
[The JS Call Stack Explained in 9 Minutes](https://www.youtube.com/watch?v=W8AeMrVtFLY)

_JS interprets code with the *call stack*_

1. Reads code sequentially, line by line
1. “Folds clothes” - add it onto stack
3. Execute it - is it done?
4. If it’s done, pop it off the stack
5. If it’s not done but sees something else...
    put that “something else” on top of the stack!
6. Continue execution until everything is off the stack
7. Fin.

(_This is a precursor to recursion_)

Most, if not all, programming languages utilize the call stack

Current Methods being run at the top of the call stack are referred to as the:

*“Execution Context”*

**Fun Fact:** 

The website “Stack overflow” is a reference to a call stack memory error!

-------------

## Assignment: ##

* Implement 2 different functions, each with a single console.log(“(func name)“)
* Name each “A”, “B”
* You can only call (emphasis on call) “A” Exactly ONE TIME.
* Each function takes in one parameter, ‘k’.
* “A” returns the value of ‘k’ squared.
* “A” cannot perform any mathematic operations.

Think about how the call stack interprets your program, which function finished first?

## Bonus ##

Thursday Night:

Drawing Visualization to come over Zoom

-------------

**Below Warning:**
_This was the assignment from the previous cohort, and may give away the answer to the assignment. I RECOMMEND you complete the assignment first._

[Phil's Video](https://www.youtube.com/watch?v=fw5qBAqHIcI)
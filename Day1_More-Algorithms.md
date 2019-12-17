DAY 1
Week 10 - Comp Sci with Javascript
-------------------------

## More on Algorithms

**Review**
So Far we have covered:

Modulo / Circular Array
Big O
Call Stack
Recursion
OOP / Classes
Data Structures
Overview of Algorithms

---

_Be sure to get the work done - comment often and use a repo!__

---

**Quick Note:**

Last week I asked you to do a Prime Number Checker
It’s easy enough to ‘brute force’ it - just iterate over every integer up to n

But at least one of you caught on to a much more optimal way
Only go up to the square root!
This is a massive improvement (check the example I give below)

---

**This week:**

Binary and Hexadecimal numbers

---

(There are many resources on these two things)

[Video: Convert Binary to Hexadecimal](https://www.youtube.com/watch?v=tSLKOKGQq0Y)

[Article: Binary, Decimal, and Hexadecimal NUmbers](https://www.mathsisfun.com/binary-decimal-hexadecimal.html)

---

As you know, we count in 10's... 0-9, then add a digit, and repeat. (base 10)

But computers speak in binary - 0 and 1's (base 2)
While hexadecimal is used to simplify how we read binary and memory addresses (base 16)

Understanding these languages is important to improving your full understanding of machines.

---

**The Objective**

Today is for you to understand how binary and hexadecimal work, in an intuitive way.

**What is “base 10”?**

Base 10, called decimal, is what we use to count, we have 10 fingers and 10 toes, so it’s just how we learned how to count.
We created 10 symbols, 0-9.
And the rest is history, we can all count in base 10.

For a mathematical representation of decimal (that may help understand binary and hex)

The decimal number 528 is represented as a “Polynomial” or a math expression. That expression is this:

(5 _ 10^2) + (2 _ 10^1) + (8 \* 10^0) = 528

If we change 5, 2, and 8 out for variables, we can create any 0-3 digit number.
If we wanted to add digits, we continue adding terms, (k \* 10^n).
Where k is the number, and n is the nth digit from the right.

This will be the same for binary and hex, just change 10 for either 2 or 16!

---

**What is “base 2”?**

Base 2, called binary, counts numbers all the same, just differently.
Rather than have 10 unique symbols, there are only 2, 0 and 1.
So we cannot count past 1 in a single digit, we have to add a digit.
This means we need more digits to count the same amount in decimal.
However, being binary meansis really simple - it’s either on or it’s off!

The binary number 1011 is represeted as a “Polynomial” in a similiar way:

(1 _ 2^3) + (0 _ 2^2) + (1 _ 2^1) + (1 _ 2^0) = ?? What’s the answer in decimal??

Notice, it’s the same exact pattern as decimal, we just can’t use anything except 0 and 1, and the 10 is swapped for 2!

---

**What is “base 16”?**

Base 16, called hexadecimal, is another number system!
This one has a larger base than decimal, and thus can represent the same numbers with less digits than decimal (and binary).
Okay so then there must be 16 numbers for this!
But... we don’t have 16 “numbers”. We stop at the number 9. So how is hexadecimal represented?

After 9, we start with the first 6 letters of the alphabet! A, B, C, D, E, F

A ==> 10
B ==> 11
C ==> 12
D ==> 13
E ==> 14
F ==> 15

That’s it! I hope you did the hash-mapping homework.
So now you can count to 15 in hexadecimal... It’s just F!

Mathematical Polynomial representation is easy!

Let’s say we have the hex number F8

Can you figure out it’s value in decimal?

(15 _ 16^1) + (8 _ 16^0) = ??

The F was converted to 15.

What’s the maximum number a two-digit hexadecimal number can represent?

Can one of you tell me what is signicant about that, in another number system?

---

Binary is at the very core of how computers work.

So now you guys know the basics of binary and hex, and how to convert them into Decimal form.

But converting back and forth is a pain, let’s create our own coverters!

---

**Assignment:**

* Design your own class / function / etc. IE., Class called NumberSystem()
* It should be able to take in a integer or string IE., 134, “F8A5”, “1011", etc.
* It should convert numbers from binary to decimal, and hex to decimal.
* Look up how to convert decimal into hex and decimal to binary, add that to your class / program.

**Bonus:**

**Do Hex -> Binary**
* Trivial method? Hex -> Decimal -> Binary
* Or you can find the mathematical shortcut, up to you how much time you want to spend

_Tomorrow: Sorting_

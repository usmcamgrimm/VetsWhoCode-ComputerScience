DAY 1
Week 10 - Comp Sci with Javascript
-------------------------

Sorting
-------------------------

We all know what sorting is!

How can we do it for array / list types?
Or objects, etc.

-------------------------

[Video Visualization: 15 Sorting Algorithms in 6 Minutes](https://www.youtube.com/watch?v=kPRA0W1kECg&t)

_There are a lot of good videos on many different algorithms!_

[Article: Sorting Algorithms](https://www.geeksforgeeks.org/sorting-algorithms/)

-------------------------

So many sorting algorithms...

We can “Check” for a sorted list pretty easily, just iterate and make sure order is kept.

But what about actually sorting?
We have to iterate, and also ensure we are properly sorting.
This can be reduced down to O(n * log n) I.E., Merge Sort

But many algorithms take as long as O(n^2) I.E., Bubble Sort

(hint, use desmos.com to plot these two on a graph!)

Why not use the best one with the best Big O?
There’s always overhead to consider. Some are better than others in situations.

-------------------------

**Focus**

With so many algorithms, it’s hard to just pick one.

We’ll pick a non-trivial one to walk through, one of my favorites.

**Heap Sort**

Utilizes the min-“Heap” data structure to sort in ascending order

_Max-heap sorts in descending order_

[Watch the Heap video, very useful!](https://www.youtube.com/watch?v=t0Cq6tVNRBA&t)

I will share the code for my own min-heap sorting algorithm.

We’ll walk line-by-line

Afterwards....

-------------------------

**Assignment:**

We’ve gotten good at solving problems with code...

* You will pick at least 2 sorting algorithms yourself and code them.
* Can use either Class or Functions like before
* Preferably, don’t do two O(n^2) - Try an O(n log n)!
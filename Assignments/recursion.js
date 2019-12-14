/*
1. We want to know the sum of the first N integers. ie: n=5, then 5+4+3+2+1 = 15
2. First, find the closed form solution of this, and code a function.
3. Then, write the recursive function of this.
4. Think about the factorial method we went over.
*/
function sumClosed(k) {
    return k * (k + 1) / 2;
}

console.log(sumClosed(5));

function sumRecursive(k) {
    if (k <= 1) {
        return 1;
    } else {
        return k + sumRecursive(k - 1);
    }
}

console.log(sumRecursive(5));
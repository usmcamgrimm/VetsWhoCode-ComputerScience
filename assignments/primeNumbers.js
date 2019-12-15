/* Primality Test */
// Check if an integer is a Prime Number
function checkPrime(x) {
    let div = 2; // Divide by 2

    while (x > div) {

        // Check remainder
        // If remainder is 0, number is not prime
        if (x % div == 0) {
            return false;
        } else {
            // Increment the divisor by 1
            div++
        }
    }
    // Indicates a prime number
    return true;
}

console.log(checkPrime(27));

function testPrime(n) {

    //Must be >= 2 to be considered for a prime number
    if (n <= 1) return false;
    if (n == 2) return true;

    //The divisor should be less than the square root of n
    let sr = Math.sqrt(n);

    //Use a loop to determine the upper limit to check if divisible
    for (let i = 2; i <= sr; i++)
        if (n % i == 0) return false;
    return true;
}

console.log(testPrime(27));

//This will determine the list of prime numbers
function listPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i == 0) return false;
    return true;
}

//Make an array to display prime numbers
function showPrime(c) {
    let primeArray = [];
    for (let i = 2; i < c; i++) {
        if (listPrime(i)) {
            primeArray.push(i);
        }
    }
    console.log(primeArray);
}

console.log(showPrime(100));
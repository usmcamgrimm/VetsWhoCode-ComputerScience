/*
Pick at least 2 sorting algorithms and code them yourself.
Can use either Class or Functions like before
Preferably, don’t do two O(n^2) - Try an O(n log n)!
*/

// Cocktail Sort Algorithm
class cocktailSort {
    cocktail(array) {
        let sorted = true;

        while (sorted) {
            // Iterate through the array
            for (let i = 0; i < array.length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    // Create a temp array to store values
                    // as they are sorted in the loop
                    let tempArray = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tempArray;
                    sorted = true;
                }
            }

            // Add a break in case the array is already sorted
            if (!sorted) {
                break;
            }

            sorted = false;
            //Loop through the array going the other way
            for (let i = array.length - 1; i > 0; i--) {
                if (array[i] > array[i + 1]) {
                    // Create a temp array to store values
                    // as they are sorted in the loop
                    let newTempArray = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = newTempArray;
                    sorted = true;
                }
            }
        }
        while (sorted);
        // Return the array after it has been sorted
        return array;
    }
}

let sort = new cocktailSort();
console.log(sort.cocktail([3, 2, 6, 9, 5, 4, 7, 0, 1, 8]));
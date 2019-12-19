/*
Pick at least 2 sorting algorithms and code them yourself.
Can use either Class or Functions like before
Preferably, don’t do two O(n^2) - Try an O(n log n)!
*/

// Shell Sort Algorithm
class shellSort{
    shell(array) {
        let gap = array.length / 2;

        while (gap > 0) {
            for (let g = gap; g < array.length; g++) {
                let i = g;
                let tempArray = array[g];

                while (i >= gap && array[i - gap] > tempArray) {
                    array[i] = array[i-gap];
                    i = i - gap;
                }

                array[i] = tempArray;
            }

            if (gap == 2) {
                gap = 1;
            } else {
                gap = parseInt(gap * 5 / 11);
            }
        }
        return array;
    }
}

let boom = new shellSort();
console.log(boom.shell([0,3,2,5,1,4,6,10]));
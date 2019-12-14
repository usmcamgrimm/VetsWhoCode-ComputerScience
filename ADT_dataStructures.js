console.log('Data Structures Using Witchers');
console.log('\n');
console.log("==== Set() ====");
console.log("\n");

/* Set */
let witcher = new Set();
witcher.add('Geralt of Rivia');
witcher.add('Vesemir');
witcher.add('Coen');
witcher.add('Aiden');
witcher.add('Lambert');

witcher.delete('Coen');
witcher.has('Lambert');
// witcher.clear();

witcher.forEach(v => console.log(v));

console.log("\n");
console.log("==== Stack() ====");
console.log("\n");

/* Stack */
class Stack {
    constructor() {
        this.data = []
    }

    // Push function
    push(element) {
        this.data.push(element);
    }

    // Pop function
    pop() {
        if (this.data.length == 0)
            return "The stack is empty, add some data";
        return this.data.pop();
    }

    // Peek function
    peek() {
        // Returns the topmost stack element without deleting it
        return this.data[this.data.length - 1];
    }

    // Helper Methods
    isEmpty() {
        return this.data.length == 0;
    }
    print() {
        console.log(this.data);
    }

}

let witcherStack = new Stack();
console.log(witcherStack.pop());

witcherStack.push("Geralt of Rivia");
witcherStack.push("Vesemir");
witcherStack.push("Lambert");

console.log(witcherStack.print());

console.log("\n");
console.log("==== Queue() ====");
console.log("\n");

/* Queue */
class Queue {
    constructor() {
        this.data = [];
    }

    //Add an element to the queue
    enqueue(element) {
        this.data.push(element);
    }

    //Remove an element from the queue
    dequeue(element) {
        if (this.isEmpty())
            return "The Queue is empty";
        return this.data.shift();
    }

    isEmpty() {
        return this.data.length == 0;
    }
    print() {
        let str = "";
        for (let i = 0; i < this.data.length; i++)
            str += this.data[i] + " ";
        return str;
    }
}

let witcherQueue = new Queue();

console.log(witcherQueue.dequeue());

witcherQueue.enqueue("Geralt of Rivia");
witcherQueue.enqueue("Vesemir");
witcherQueue.enqueue("Lambert");

console.log(witcherQueue.print());

witcherQueue.dequeue("Lambert");

console.log(witcherQueue.isEmpty());

console.log("\n");
console.log("==== Map() ====");
console.log("\n");

/* Map */
let witcherMap = new Map();

// Add kay-value pairs with set() method
// First arg is the key
// Second arg is value, referenced by the key
witcherMap.set('Geralt of Rivia', {
    school: 'Wolf',
});
witcherMap.set('Vesemir', {
    school: 'Wolf',
});
witcherMap.set('Coen', {
    school: 'Wolf',
});
witcherMap.set('George of Kagen', {
    school: 'Griffin',
});
witcherMap.set('Aiden', {
    school: 'Cat',
});

console.log(witcherMap);
console.log('\n');

//Deleting key-value pairs
witcherMap.delete('Coen');
console.log(witcherMap);
console.log('\n');

//Check if a key exists in the map
// Returns true or false
console.log(witcherMap.has('Lambert'));
console.log('\n');

// Return the value of a key
console.log(witcherMap.get('Vesemir'));
console.log('\n');

// clear() method removes all key-value pairs
witcherMap.clear();
console.log(witcherMap);

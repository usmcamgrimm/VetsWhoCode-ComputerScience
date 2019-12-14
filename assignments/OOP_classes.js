class Cats {
    constructor(name, age, sex, color, breed) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.color = color;
        this.breed = breed;
    }

    toString() {
        return `${this.name}, ${this.age}, is a ${this.sex} ${this.color} ${this.breed}.`
    }

    print() {
        console.log(this.toString());
    }
}

const cat1 = new Cats('Jinx', '8', 'male', 'Blue Point', 'Himalayan');
const cat2 = new Cats('Jezebel', '2', 'female', 'calico', 'Persian');

cat1.print();
cat2.print();
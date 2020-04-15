class Fruit {
    color = 'Red';
    printColor = () => {
        console.log(this.color);
    }
}

class Apple extends Fruit {
    name = 'Apple';
    printName = () => {
        console.log(this.name)
    }
}

const person = new Apple();
person.printColor();
person.printName();
let isPositive = (number) => number >= 0;


// passing a function to another function
class Person {
    constructor(name) {
        this.name = name;
    }
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow', this.name)
        }, 1000)
    }

    printNameFunction() {
        setTimeout(function () {
            console.log('Function', this.name)
        }, 1000)
    }
}


let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()

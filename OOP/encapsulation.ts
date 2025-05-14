// class

class Person {
    constructor(public name: string, public age: number, public address: string) { }
    introduce(): void {
        console.log(`I'm ${this.name}, now I'm ${this.age} and I'm from ${this.address}.`)
    }
}


// object
let sady = new Person("Sady", 20, "Gaital, kishoregonj")
// sady.introduce()


// animal class

class Animal {
    constructor(public name: string) { }
    get move(): string {
        return `${this.name} is moving.`
    }
}

class Dog extends Animal {
    get bark(): string {
        return `${this.name} is barking.`
    }
}

let doge = new Dog("Tomi")
// console.log(doge.bark)
// console.log(doge.move)


class Cat extends Animal {
    get meow(): string {
        return `${this.name} is meowing.`
    }
}

let cate = new Cat("Cate")
// console.log(cate.meow)
// console.log(cate.move)


// real life use of encapsulation
class BankAccount {
    private _balance: number = 0;
    private readonly _accoundNumber: string;

    constructor(accountNumber: string, private owner: string) {
        this._accoundNumber = accountNumber;
    }

    public deposite(amount: number): void {
        if (amount <= 0) {
            throw new Error("Deposite amount must be positive.")
        }
        this._balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount <= 0 || amount > this.balance) {
            throw new Error("Invalid withdrawal amount")
        }
        this._balance -= amount;
    }

    get balance(): number {
        return this._balance;
    }

    get accountNumber(): string {
        return this._accoundNumber;
    }

    get ownerName(): string {
        return this.owner;
    }
}

let firstBankAccount = new BankAccount("ASS12", "Sady")
firstBankAccount.deposite(100)
firstBankAccount.withdraw(40)
// console.log(firstBankAccount.balance)
// console.log(firstBankAccount.ownerName)
// console.log(firstBankAccount.accountNumber)



// getter 

// abstraction in OOP
abstract class Animal1 {
    constructor(public name: string) { };
    abstract makeSound(): void;
    move(): void {
        console.log(`${this.name} is moving.`)
    }
}

class Dog1 extends Animal1 {
    makeSound(): void {
        console.log(`${this.name} says Woof!`)
    }
}

class Cat1 extends Animal1 {
    makeSound(): void {
        console.log(`${this.name} says Meow!`)
    }
}

const cat = new Cat1("Kitty");
// cat.makeSound()
// cat.move()

const dog = new Dog1("Tomi");
// dog.makeSound()
// dog.move()

// polymorphism in typescirpt 
class Father {
    constructor(public address: string) { };
    getAddress(): void {
        console.log("I'm from Gaital, Kishoregonj.")
    }
}

class Sady extends Father {
    getAddress(): void {
        console.log(`Sady is from ${this.address}`)
    }
}

class Sany extends Father {
    getAddress(): void {
        console.log(`Sany is from ${this.address}`)
    }
}

let addresses: Father[] = [
    new Sady("Tokito, Japan"),
    new Sany("Finland"),
    new Father("Father of those")
];

for (let a of addresses) {
    a.getAddress(); // আলাদা আলাদা ভাবে কাজ করছে
}


// another practise of polymorphism in oop in typescript

interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(private radius: number) { }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private height: number, private width: number) { }
    getArea(): number {
        return this.height * this.width;
    }
}

let shapes: Shape[] = [
    new Circle(10),
    new Rectangle(10, 20)
]

for (let i of shapes) {
    console.log(i.getArea())
}

shapes.forEach((shape) => {
    console.log(shape.getArea())
})



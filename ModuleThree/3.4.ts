{
    // Type guard using instance of
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("I am making sound.")
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeBark() {
            console.log("I am barking.")
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMaew() {
            console.log("I am mewaing")
        }
    }

    

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark()
        } else if (isCat(animal)) {
            animal.makeMaew()
        } else {
            animal.makeSound()
        }
    }


    // const cat = new Cat("Cat Bhai", "Cat")
    // console.log(cat)
    // cat.makeMaew()
    // const dog = new Dog("Dog Bhai", "Dog")
    // console.log(dog)
    // dog.makeBark()

}
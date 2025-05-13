{
// interface, type vs interface

// type 
type UserOne = {
    name: string;
    age: number;
}

interface UserTwo {
    name: string;
    age: number
}



type UserWithRoleOne = UserOne & {role: string};
interface UserWithRoleTwo extends UserTwo {
    role: string;
}


// interface can extands also from the type alias
interface UserWithRoleThree extends UserWithRoleOne {
    address: string
}

const RoleOfTheUserThree: UserWithRoleThree = {
    name: "Sany",
    age: 90,
    role: "Officer",
    address: "Gaital, Kishoregonj"
}

console.log(RoleOfTheUserThree)

const RoleOfTheUser: UserWithRoleTwo = {
    name: "Fokir",
    age: 100,
    role: "Bangal"
}

const firstUser: UserOne = {
    name: "Sady",
    age: 100
}

console.log(typeof(firstUser.name))
console.log(typeof(firstUser.age))




// in javascript object is object, function is object, array is object
type RollNumber = number[];
interface RollNumberTwo {
    [index: number] : number
}

let rollNumberListOne: RollNumber = [1, 2, 3, 4, 5];
let rollNuberListTwo: RollNumberTwo = [10, 2, 23, 2, 42, 3]
console.log(typeof(rollNumberListOne))
console.log(typeof(rollNuberListTwo))

for (let roll in rollNuberListTwo) {
    console.log(roll)
}


type Add = (num1: number, num2: number) => number;
interface AddOne {
    (num1: number, num2: number): number
} 

const add: Add = (num1, num2) => num1 + num2;


}
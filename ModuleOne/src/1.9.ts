{
// Name alias in Typescript
const user = {
    id: 11,
    name: "Sady"
}

const {name: userName} = user;
console.log(userName)


// Type alias in Typescript

type Student = {
    name: string;
    roll: number;
    address: string;
    age: number;
    phone: string;
    gender: string
}

const studentOne: Student = {
    name: "Sakib",
    roll: 660224,
    address: "Gaital, Kishoregonj",
    age: 18,
    phone: "01762726994",
    gender: "male"
}

const studentTwo: Student = {
    name: "Sany",
    roll: 660225,
    address: "Dhanmondi 32",
    age: 17,
    phone: "01630865128",
    gender: "male"
}


type StudentName = string;
type IsAdmin = boolean;

const SName: StudentName = "Sady";
const SAdmin: IsAdmin = true;

// function type alias
// without using function alias 
let add = (numOne: number, numTwo: number): number => numOne + numTwo

// using function alias
type Multi = (numOne: number, numTwo: number) => number
let multi: Multi = (numOne, numTwo) => numOne * numTwo


}
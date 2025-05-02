{
// typescript function
function add(numOne: number, numTwo: number = 10):number {
    let total = numOne + numTwo;
    return total;
}
console.log(add(10, 20))
// Normal function


// Arrow function
const addArrow = (numOne: number, numTwo: number = 0): number => numOne + numTwo;

// In the function of an Object we called method
let poorPerson = {
    name: "Sady",
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is: ${this.balance + balance}`;
    }

}

// callback function

const numberList: number[] = [10, 20, 30];
const newNumberList = numberList.map((element: number): number =>  element * element)

}
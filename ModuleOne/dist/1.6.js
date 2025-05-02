"use strict";
{
    // typescript function
    function add(numOne, numTwo = 10) {
        let total = numOne + numTwo;
        return total;
    }
    console.log(add(10, 20));
    // Normal function
    // Arrow function
    const addArrow = (numOne, numTwo = 0) => numOne + numTwo;
    // In the function of an Object we called method
    let poorPerson = {
        name: "Sady",
        balance: 0,
        addBalance(balance) {
            return `My new balance is: ${this.balance + balance}`;
        }
    };
    // callback function
    const numberList = [10, 20, 30];
    const newNumberList = numberList.map((element) => element * element);
}

"use strict";
// Destructuring in typescript
// Object Destructuring
const user = {
    id: 660224,
    name: {
        firstName: "Abdullah",
        middleName: "Al",
        lastName: "Sady"
    },
    address: "Gaital, Kishoregonj",
};
const { name: { firstName }, address } = user;
console.log(firstName); // "Abdullah"
console.log(address); // "Gaital, Kishoregonj"
// Array Destructuring
let teacherlist = ["Arnob Robi", "Razib", "Hasan", "Arif", "Ali Azam", "Abu Bakhar"];
let [, , hasanSir, ...restTeachers] = teacherlist;
console.log(hasanSir); // "Hasan"
console.log(restTeachers); // ["Arif", "Ali Azam", "Abu Bakhar"]

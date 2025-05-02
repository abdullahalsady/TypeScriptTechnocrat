{
// Ternary, optional chaining 

const age: number = 18;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}


const isAdult = age >= 18 ? "Adult" : "Not Adult";
console.log({isAdult})

// nullish coalescing operator (if the decision will be either null or nether undefinded)
const isAuthenticated = "";
const resultOne = isAuthenticated ?? "Guest";
const resultTwo = isAuthenticated ? isAuthenticated : "Guest";
console.log(resultOne)
console.log({resultOne}, {resultTwo})


type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string;
    }
}

const userOne: User = {
    name: "Sady",
    address: {
        city: "Dhaka",
        road: "1209",
        presentAddress: "Dhanmondi, 32"
    }
}

const userOnePermanentAddress = userOne?.address?.permanentAddress ?? "No Permanent Address.";
const userOnePresentAddress = userOne.address.presentAddress;
console.log(userOnePresentAddress)
console.log(userOnePermanentAddress)

















}
{
    // Define a type with vehicle categories
type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}

// ✅ Manual way to define a union of keys (error-prone if Vehicle changes)
type Owner = 'bike' | 'car' | 'ship';

// ✅ Better way: use `keyof` to automatically extract keys from the type
// This is dynamic — if you add or remove a property from Vehicle, this updates automatically
type Own2 = keyof Vehicle; // becomes: "bike" | "car" | "ship"

// Example usage of the keyof-derived type
const middleClassPersonOwn: Own2 = "car";  // ✅ Valid key
const lowerMiddleClassPersonOwn: Own2 = "bike";  // ✅ Valid key

// An object representing a user
const user = {
    name: "Sady",
    age: 23,
    address: "Gaital, Kishoregonj"
}

// Another object representing a person with different properties
const lowerClassPerson = {
    shirtSize: 32,
    pantSize: 20,
    landOwn: "3m"
}

// 🧠 Generic function that gets a value from an object by key
// - X is the type of the object
// - Y is the key — restricted using `extends keyof X`
// - `keyof X` ensures that Y can **only be a valid key** of the object X
const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key]; // Safely return the value from object by key
}

// ✅ Valid: "name" is a key of the 'user' object
let resultOne = getPropertyValue(user, "name");  // returns: "Sady"

// ❌ Invalid: "habijabi" is NOT a key of 'lowerClassPerson'
// TypeScript will throw an error — this is the power of `keyof` + constraint
// let resultTwo = getPropertyValue(lowerClassPerson, "habijabi"); // ❌ Error



}
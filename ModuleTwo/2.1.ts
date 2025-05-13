{
// Type Asserstion
let anything: any;
anything = "Next Level Web Development";
anything = true;
// anything = 1000;
// (anything as number).toString;
(anything as string).length;
console.log();




const kgToGm = (value?: string | number): string | number | undefined => {
    if (typeof value === "string") {
        const parsed = parseInt(value) * 1000;
        return `The converted value is: ${parsed}`
    } else if (typeof value === "number") {
        return `The converted value is: ${value * 1000}`
    } else {
        return undefined;
    }
}

const resultOne = kgToGm(100) as number;
console.log(resultOne);
const resultTwo = kgToGm("343") as string;
console.log(resultTwo)
const resultThree = kgToGm() as undefined;
console.log(resultThree)

}
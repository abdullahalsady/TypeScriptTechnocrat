{
// nullable type
const searchName = (value: string | null) => {
    if (value) {
        console.log("Searching...")
    } else {
        console.log("There is nothing to search.")
    }
}

searchName(null);


// Never,unknown and
const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
        const convertedSpeed = (value * 1000)/3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
        const [result, unit] = value.split(" ");
        const convertedSpeed = (parseInt(result) * 1000)/3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
        console.log("Wrong Input.")
    }
}

// getSpeedInMeterPerSecond(1000)
getSpeedInMeterPerSecond("1000 Kmh^-1")
getSpeedInMeterPerSecond(50)



// never type explaination
const throwError = (message: string): never => {
    throw new Error(message);
}

throwError("I'm your boss Error...")











 

}
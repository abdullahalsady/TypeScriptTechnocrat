{
    // Mapped Types in TypeScript
    const arrayOfNumbers: number[] = [1, 2, 3, 4]
    // const arrayOfStrings: string[] = ['1', '2', '3', '4']
    
    const arrayOfStrings: string[] = arrayOfNumbers.map(number => number.toString())

    console.log(arrayOfStrings)

    type AreaNumber = {
        height: number;
        width: number;
    }

    // if I convert this areaNumber type into areaString type
    //  like this 
    // type AreaString = {
    //     height: string;
    //     width: string
    // }

    type AreaString<T> = {
        [key in keyof T ] : T[key]; 
    }

    const area1: AreaString<{height: string; width: number}> = {
        height: "100",
        width: 100
    }


}
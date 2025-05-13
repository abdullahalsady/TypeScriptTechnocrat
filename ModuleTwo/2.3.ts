{
    // generic type 
    // type GenericArray<param> = Array<param>;
    type GenericArray<T> = Array<T> // (Industry pattern T mean TypeScript)

    // const rollNumbers: number[] = [1, 2, 3, 4]
    // const rollNumbers: Array<number> = [1, 2, 3, 4]
    const rollNumbers: GenericArray<number> = [1, 2, 3, 4]


    // const mentors: string[] = ["Sakib", "Rakib", "Sumon"]
    // const mentors: Array<string> = ["Sakib", "Rakib", "Sumon"]
    const mentors: GenericArray<string> = ["Sakib", "Rakib", "Sumon"]


    // const boolArray: boolean[] = [true, false, false]
    // const boolArray: Array<boolean> = [true, false, false]
    const boolArray: GenericArray<boolean> = [true, false, false]

    // Generic Type Array of Object
    const users: GenericArray<{name: string, roll: number}> = [
        {
            name: "Sady",
            roll: 100
        },
        {
            name: "Sany",
            roll: 99
        }
    ]
    // Generic Type Tuple
    type GenericTuple<X, Y> = [X, Y];
    
    const human: GenericTuple<string, string> = ["Sady", "Sany"];

    // const userWithID: GenericTuple<number, {name: string, email: string}> = [
    //     100, {name: "Sakib", email: "dev.sady@gmail.com"}
    // ]

    // it's a way to create type datatype then use in the generic array
    // type User = {
    //     name: string,
    //     email: string
    // }

    // it's a another way to create type interface and use this generic in the generic tuple array
    interface User {
        name: string,
        email: string
    }


    const userWithID: GenericTuple<number, User> = [
        100, {name: "Sakib", email: "dev.sady@gmail.com"}
    ]


}
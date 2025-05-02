{// object datatype in typescript

const user: {firstName: string; middleName: string; lastName: string} = {
    firstName: "Abdullah",
    middleName: "Al",
    lastName: "Sady",
}

const anotherUser: 
{
    company: "Programming Hero", // if company value is fixed for every emploies (literal type)
    readonly bestFriend: string,
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean
} = {
    company: "Programming Hero",
    bestFriend: "Rakib",
    firstName: "Abdul",
    lastName: "Hakim",
    isMarried: true
}

// anotherUser.company = "PH";
}
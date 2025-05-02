{
// Union and Intersection types

// Union Type
// type FrontendDeveloper = "Weak Developer" | "Strong Developer";
// type FullStackDeveloper = "Frontend Developer" | "Expert Developer";

// let newDeveloper: FrontendDeveloper = "Weak Developer";
// console.log(newDeveloper);

// type User = {
//     name: string;
//     email?: string;
//     gender: "Male" | "Female";
//     bloodGroup: "O+" | "A+" | "AB+";
// }


// const user1: User = {
//     name: "Sady",
//     gender: "Male",
//     bloodGroup: "A+"
// }


type FrontendDeveloper = {
    skills: string[];
    designationOne: "Frontend Developer"
}

type BackendDeveloper = {
    skills: string[],
    designationTwo: "Backend Developer"
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;


const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Javascript", "NODEJS", "ExpressJS", "MongoDB"],
    designationOne: "Frontend Developer",
    designationTwo: "Backend Developer"
}








}
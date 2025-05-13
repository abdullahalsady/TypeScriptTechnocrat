{
    // Function with generics
    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T> (param: T): T[] => {
        return [param]
    }

    const res1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGeneric<string>("Bangladesh");
    type User = {
        name: string;
        roll: number
    }
    const reGenericObject = createArrayWithGeneric<User>({name: "sady", roll: 660224})

    const createArrayWithTuple = <T, Q> (param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
    const res11 = createArrayWithTuple<string, {name: string}>("Bangladesh", {name: "Asia"});
    
    const addCourseToStudent = <T>(student: T) => {
        const course = "Next level Web Development";

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: "Sady", email: "abdullahalsady@gmail.com", devType: "next level developer"})
    const student2 = addCourseToStudent({name: "Sany", email: "sany@gmail.com", hasWatch: "Apple Band 5"})
}
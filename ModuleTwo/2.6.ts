{
    // Constraints in TypeScript
// Constraints are used in generics to restrict the kind of types that can be passed.
// In this example, the constraint ensures that the generic type T must include
// at least the properties: id, name, and email — otherwise, it will result in a TypeScript error.

const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
    const course = "Next level Web Development";

    return {
        ...student,
        course
    }
}

// ✅ Works because it includes id, name, and email — also adds extra property (devType)
const student1 = addCourseToStudent({
    id: 222,
    name: "Sady",
    email: "abdullahalsady@gmail.com",
    devType: "next level developer"
});

// ✅ Also valid — includes id, name, email and extra (hasWatch)
const student2 = addCourseToStudent<{ id: number; name: string; email: string; hasWatch: string }>({
    id: 333,
    name: "Sany",
    email: "sany@gmail.com",
    hasWatch: "Apple Band 5"
});

// ❌ Error: Type '{ emni: string; }' is not assignable to parameter of type '{ id: number; name: string; email: string; }'.
// Because it does NOT meet the constraint (missing id, name, and email)
const student3 = addCourseToStudent({ emni: "emni" });

}
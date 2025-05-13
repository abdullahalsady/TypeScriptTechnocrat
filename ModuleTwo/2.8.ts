{

    // Fetch data from json placeholder
    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }
    const getTodo = async(): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        return data
    }

    let data = getTodo()
    console.log(data)

    // Promise 

    // type something
    type Something = {something: string}
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = {something: "something"};
            if (data) {
                resolve(data)
            } else {
                reject
            }
        })
    }

    // calling create promise function

    const showData = async(): Promise<Something> => {
        const data: Something = await createPromise();
        return data
    }


}
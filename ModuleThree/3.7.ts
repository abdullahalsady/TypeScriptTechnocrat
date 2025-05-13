{
    // Statics in OOP
    class Counter {
        static count: number = 0;
        static increment() {
            return Counter.count += 1
        }
        static decrement() {
            return Counter.count -= 1
        }
    }

    // const instance1 = new Counter();
    console.log(Counter.increment()); // same memory
    console.log(Counter.increment()); // same memory
    console.log(Counter.increment()); // same memory
    console.log(Counter.increment()); // same memory
    console.log(Counter.increment()); // same memory


    // const instance2 = new Counter();
    console.log(Counter.decrement()) // this is another different memory too
}
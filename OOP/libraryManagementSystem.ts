class Book {
    private isBorrowed: boolean = true;
    constructor(
        public readonly id: string,
        public title: string,
        public author: string) { }

    public borrow(): void {
        if (this.isBorrowed) {
            throw new Error(`${this.title} is already borrowed.`);
        }
        this.isBorrowed = true
    }
}
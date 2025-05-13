{
    // Getter and setter
    class BankAccound {
        public readonly id: number;
        public name: string;
        protected _balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // public addDeposite(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // getter
        get balance() { 
            return this._balance;
        }

        // setter
        set deposite(amount: number) {
            this._balance = this._balance + amount
        }

        


        // public getBalance() {
        //     return this._balance
        // }


    }

    // class Student extends BankAccound {
    //     test() {
    //         this._balance = 
    //     }
    // }

    const goribManuserAccount = new BankAccound(11, "Sady", 10)
    // goribManuserAccount.id = 222;
    goribManuserAccount.deposite = 20
    const myBalance = goribManuserAccount.balance
    console.log(myBalance)

}
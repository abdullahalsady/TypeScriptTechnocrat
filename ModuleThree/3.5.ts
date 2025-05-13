{
    // Access modifiers
    class BankAccound {
        public readonly id: number;
        public name: string;
        protected _balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposite(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance
        }
    }

    class Student extends BankAccound {
        test() {
            this._balance = 
        }
    }

    const goribManuserAccount = new BankAccound(11, "Sady", 10)
    // goribManuserAccount.id = 222;
    goribManuserAccount.addDeposite(100)
    const myBalance = goribManuserAccount.getBalance()
    console.log(myBalance)

}
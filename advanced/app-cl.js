class Client {
	constructor(name, lastName, balance) {
		this.name = name;
		this.lastName = lastName;
		this.balance = balance;
	}

	printBalance() {
		return `Hi ${this.name} ${this.lastName} your balance is ${this.balance}`;
	}

	getClientType() {
		let balance = this.balance;
		let membership;
		if (balance > 30000) {
			membership = "Platinum";
		} else if (balance > 10000) {
			membership = "Gold";
		} else {
			membership = "Normal";
		}
		return membership;
    }
    
    balanceWithdrawal(withdrawal){
        return this.balance -= withdrawal
    }

     welcome(){
        console.log('Welcome to our Bank')
        return 'Welcome to our Bank'
    }
}


const maria = new Client("Maria", "Bates", 30000000);
maria.balanceWithdrawal(100000)
maria.welcome();

console.log(maria.printBalance());

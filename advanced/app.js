function Client(name, amount) {
	this.name = name;
	this.amount = amount;
	this.clientType = clientType(this.amount);
}

const clientType = (account) => {
	let type;
	if (account > 1000) {
		type = "Platinum";
	} else if (account > 500) {
		type = "Gold";
	} else {
		type = "Normal";
	}
	//console.log(`this client is ${type}`);
	return type;
};

//proptypes;

Client.prototype.currentDiscountMembership = function () {
	let discount;
	discount = this.amount > 1000 ? "20" : "0";
	// console.log(`${this.name} have ${discount}%off in the club`);
	return discount;
};

Client.prototype.displayInfo = function () {
	return `Client: ${this.name}, 
            \n Money: ${this.amount} dolars, 
            \n Membership: ${this.clientType}  
            \n Sales Discount ${this.currentDiscountMembership()}%`;
};

function Enterprise(name, account, phone, type){
    //heredando atributos
    Client.call(this, name, account);
    this.phone = phone;
    this.type = type;
}
//heredando metodos
Enterprise.prototype = Object.create(Client.prototype);

const empresa1 = new Enterprise('ALkosto', 200000, '3408972398', 'retail');

console.log(empresa1)
console.log(empresa1.displayInfo())

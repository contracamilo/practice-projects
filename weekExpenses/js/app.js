//variables
const userBudget =  prompt('What is your weekly budget');
const errMessage = 'Ups something went wrong!!';
const successMessage = 'The expense was added correctly!!';
let quantityBudget;
let ui;

//DOM elements
const form = document.getElementById('add-expenses');


/**
* Class representing an user budget.
* @param {number} budget - current user budget.
* @param {number} remaining - remaining user budget.
*/
class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.remaining = Number(budget);
    }

    remainingBudget(quantity = 0){
        return this.remaining -= Number(quantity);
    }
}

/**
* Class that represent some user interface elements.
*/
class Ui {
	/**
	 * insert the values on DOM.
	 * @param {number} quantity - value prompted by the user.
	 */
	insertBudget(quantity = 0) {
		const budgetSpan = document.querySelector("span#total");
		const remainingSpan = document.querySelector("span#remaining");

		budgetSpan.innerHTML = `${quantity}`;
		remainingSpan.innerHTML = `${quantity}`;
	}

	/**
	 * Show a feedback message to the user.
	 * @param {string} message - feedback text message.
	 * @param {string} type - Type of hte message can be Error or Success.
	 */
	showMessage(message, type) {
		const messageDiv = document.createElement("div");
		messageDiv.classList.add("text-center", "alert");

		type === "error" ? messageDiv.classList.add("alert-danger") : messageDiv.classList.add("alert-success");

		messageDiv.appendChild(document.createTextNode(message));
		document.querySelector(".primary").insertBefore(messageDiv, form);

		setTimeout(() => {
			document.querySelector(".primary .alert").remove();
			form.reset();
		}, 2000);
	}

	/**
	 * Insert expenses to the list
	 * @param {string} name - name of the expense.
	 * @param {number} quantity - amount of the expense.
	 */
	addExpenseToList(name, quantity) {
		const expensesList = document.querySelector("#expenses-list ul");
		const li = document.createElement("li");

		li.className = "list-group-item d-flex justify-content-between align-items-center";
		li.innerHTML = `${name} <span class="badge badge-primary badge-pill"> $ ${quantity} </span>`;

		expensesList.appendChild(li);
	}

	/**
	 * Check the remaining budget
	 * @param {number} quantity - amount of the expense.
	 */
	getRemainingBudget(quantity) {
		console.log(quantityBudget);
		const remaining = document.querySelector("#remaining");
		const currentRemaining = quantityBudget.remainingBudget(quantity);

		remaining.innerHTML = `${currentRemaining}`;

		this.checkBudget();
	}

	/**
	 * Change the budget color
	 */
	checkBudget() {
		const {budget, remaining} = quantityBudget;
		const remainingElement = document.querySelector(".remaining");

		if (budget / 4 > remaining) {
			//check 25%
			remainingElement.classList.remove("alert-warning");
			remainingElement.classList.add("alert-danger");
		} else if (budget / 2 > remaining) {
			//check 50%
			remainingElement.classList.remove("alert-success");
			remainingElement.classList.add("alert-warning");
		}
	}
}


//Event listeners

document.addEventListener('DOMContentLoaded', () => {
   userBudget === null || userBudget === ''
  ? window.location.reload()
  : quantityBudget = new Budget(userBudget)
    ui = new Ui()
    ui.insertBudget(quantityBudget.budget)
    console.log(quantityBudget);

});

form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const expenseName = document.querySelector('#expense').value;
    const quantityName = document.querySelector('#quantity').value;

    ui = new Ui();

    if(expenseName == '' ||  quantityName == ''){
        ui.showMessage(errMessage, 'error');
    }else{
        ui.showMessage(successMessage, 'sucess');
        ui.addExpenseToList(expenseName, quantityName);
        ui.getRemainingBudget(quantityName);
    }
})



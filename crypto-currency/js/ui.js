const currencies = new Api('107a864b2daab1f718e0e54fea89613a615210c72550b00394681c6fc813f4ea');

class Ui {
	constructor() {
		this.init();
	}

	init() {
		this.buildSelect();
	}

	buildSelect() {
		currencies.getCurrencyAPI().then((info) => {
			const select = document.querySelector("#crypto");

			for (const [key, value] of Object.entries(info.coins.Data)) {
				const option = document.createElement("option");
				option.value = value.Symbol;
				option.appendChild(document.createTextNode(value.CoinName));
				select.appendChild(option);
			}
		});
	}

	showMessage(message, classnames) {
		const div = document.createElement("div");
		const messageDiv = document.querySelector(".messages");

		div.className = classnames;
		div.appendChild(document.createTextNode(message));
		//Select Messages
		messageDiv.appendChild(div);
		// Show Content
		setTimeout(() => {
			document.querySelector(".messages div").remove();
		}, 3000);
	}

	showResult(result, currency, crypto) {
        const prevResult = document.querySelector('#result > div');
        
        if(prevResult) { 
            prevResult.remove();
        }

		const {FROMSYMBOL, TOSYMBOL, PRICE, CHANGEPCTDAY, LASTUPDATE} = result[crypto][currency];

		let date = new Date(LASTUPDATE * 1000).toLocaleString("es-CO");

		//build template
		let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body">
                    <h3 class="card-title">Result</h3>
                    <p>the exchange from <b>${FROMSYMBOL}</b> to <b>${TOSYMBOL}</b> is $ ${PRICE.toFixed(2)}</p>
                    <span> <b>last day variation:</b> %${CHANGEPCTDAY.toFixed(3)}</span></br>
                    <span> <b>last update:</b> ${date}</span>
                </div>
            </div>
        `;

        this.displaySpinner('block');

        setTimeout(() => {
            document.querySelector("#result").innerHTML = templateHTML;
            this.displaySpinner('none');
        }, 2000);

		
    }
    
    displaySpinner(type){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = type;
    }


}

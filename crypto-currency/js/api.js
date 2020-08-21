const mainUrl = 'https://min-api.cryptocompare.com/data/';

class Api {
	constructor(apiKey) {
		this.apiKey = apiKey;
	}

	async getCurrencyAPI() {
		const url = `${mainUrl}all/coinlist?api_key=${this.apiKey}`;
		const getCoins = await fetch(url);
        const coins = await getCoins.json();
        
		return {coins};
    }
    
    async getValues(currency, cryptoCurrency) {
        const url = `${mainUrl}pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}&api_key=${this.apiKey}`;
        const getExchange = await fetch(url);
        const result = await getExchange.json();
        
		return {result};
    }
}

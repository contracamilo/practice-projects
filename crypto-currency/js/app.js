const ui = new Ui;
const form = document.getElementById('form');
const errMessage = 'Both fields are mandatory';


form.addEventListener('submit', (e) => {
    e.preventDefault();

    //read fields
    const selectCurrency = document.querySelector('#currency');
    const selectedCurrency = selectCurrency.options[selectCurrency.selectedIndex].value;

    const selectCrypto = document.querySelector('#crypto');
    const selectedCrypto = selectCrypto.options[selectCrypto.selectedIndex].value;

    console.log(selectedCurrency, selectedCrypto);


    (selectedCurrency === '' || selectedCrypto === '') 
    ? ui.showMessage(errMessage, 'error') 
    : currencies.getValues(selectedCurrency, selectedCrypto).then((data) => {
        let { RAW } = data.result
        ui.showResult(RAW, selectedCurrency, selectedCrypto);
    });
});
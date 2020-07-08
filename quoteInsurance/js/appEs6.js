const max = new Date ().getFullYear ();
const min = max - 20;
const errMessage = 'Complete all fields please';
const loadMessage = 'Calculating...';

//insurance values
const basePrice = 2000;
const american = 1.15;
const asian = 1.05;
const european = 1.35;
const basicTypeRate = 1.30;
const completeTypeRate = 1.50;

// elements;
const form = document.getElementById ('insurance-quote');
const renderResult = document.getElementById ('result');
const div = document.createElement ('div');
const spinner = document.querySelector('#spinner img');
const selectYear = document.getElementById ('year');

/**
 * Insurance Class.
 *
 * @constructor 
 * @param {string} mark mark of the vehicle.
 * @param {string} year The year, must be a natural number.
 * @param {string} type the type of the car.
 * @return {string} current insurance value calculated.
 */
class Insurance {
  constructor (mark, year, type) {
    this.mark = mark;
    this.year = year;
    this.type = type;
  }

  quoteInsurance() {
    let quantity;
    const yearDifference = new Date ().getFullYear () - this.year;
  
    switch (this.mark) {
      case '1':
        quantity = basePrice * american;
        break;
      case '2':
        quantity = basePrice * asian;
        break;
      case '3':
        quantity = basePrice * european;
        break;
      default:
        break;
    }
  
    //Year percent calculation
    quantity -= yearDifference * 3 * quantity / 100;
  
    //Insurance type calculation
    this.type === 'basic'
      ? (quantity *= basicTypeRate)
      : (quantity *= completeTypeRate);
  
    return quantity;
  
  };
}

/**
 * User Interface Class.
 * @return {html} user interface elements
 */
class Ui{
    showError(message, type) {
        const container = document.createElement ('div');
        type === 'error'
          ? container.classList.add ('message', 'error')
          : container.classList.add ('message', 'correcto');
        container.innerHTML = `${message}`;
        form.insertBefore (container, document.querySelector ('form-group'));
      
        setTimeout (() => {
          document.querySelector ('.message').remove ();
        }, 2000);
    };

    showResult(insurance, result) {
        let mark;
      
        switch (insurance.mark) {
          case '1':
            mark = 'American';
            break;
          case '2':
            mark = 'Asian';
            break;
          case '3':
            mark = 'European';
            break;
          default:
            break;
        }
      
        div.innerHTML = `
          <ul>
              <li>Car insurance resume:</li>
              <li>${mark}</li>
              <li>${insurance.year}</li>
              <li>${insurance.type}</li>
              <li><b>Insurance Cost:</b> US$ ${Number(result).toFixed(2)}</li>
          </ul>
        `;
      
        spinner.style.display = 'block';
      
        setTimeout(() => {
          spinner.style.display = 'none';
          renderResult.appendChild(div);
        }, 2000);
       
      
    };
}


//Event listeners
form.addEventListener ('submit', e => {
  e.preventDefault ();

  const selectedMark = getSelectedItem ('mark');
  const selectedYear = getSelectedItem ('year');
  const selectedInsuranceType = document.querySelector('input[name="type"]:checked').value;
  const resultContainer = document.querySelector('#result div');

  const view = new Ui ();

  if (selectedMark === '' || selectedYear === '') {
    view.showError (errMessage, 'error');
  } else {
    const insurance = new Insurance(selectedMark, selectedYear, selectedInsuranceType);
    const quantity = insurance.quoteInsurance();

    if(resultContainer != null) {
        resultContainer.remove();
    }

    view.showError(loadMessage, 'success');
    view.showResult(insurance, quantity); 
  }
});



for (let index = max; index > min; index--) {
  let option = document.createElement ('option');
  option.value = index;
  option.innerHTML = index;
  selectYear.appendChild (option);
}

//utils

const getSelectedItem = id => {
  const mark = document.getElementById (`${id}`);
  return mark.options[mark.selectedIndex].value;
};

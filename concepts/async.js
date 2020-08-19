const cities = ['Londres', 'New York', 'Madrid', 'Paris', 'Viena'];



//Inline callback

cities.forEach((city) => {
    console.log(city)
});

// with defined function

const citiesCallback = (city) => console.log(city);
cities.forEach(citiesCallback);


const newCountry = (country, cb) => {
    setTimeout(() => {
        cities.push(country);
        cb();
    }, 2000);
}


function showCountries() {
    setTimeout(() => {
        let html = '';
        cities.forEach((city) => html += `<Li>${city}</Li>`)
        document.getElementById('app').innerHTML =  html;
    }, 1000);
}


showCountries();
newCountry('Colombia', showCountries);

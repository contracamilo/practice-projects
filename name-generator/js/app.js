document.querySelector('#generate-name').addEventListener('submit', loadNames);


//ajaxCall - print results
function loadNames (e) {
  e.preventDefault ();

  const origin = document.getElementById ('origin');
  const selectedOrigin = origin.options[origin.selectedIndex].value || '';

  const gender = document.getElementById ('gender');
  const selectedGender = gender.options[origin.selectedIndex].value || '';

  const quantity = document.getElementById ('number').value || '';

  let url = '';
  url += 'https://randomuser.me/api?';

  if (selectedOrigin !== '') {
    url += `nat=${selectedOrigin}&`;
  }

  if (selectedGender !== '') {
    url += `gender=${selectedGender}&`;
  }

  if (quantity !== '') {
    url += `results=${quantity}&`;
  }

  console.log (url);

  const xhr = new XMLHttpRequest();
  //open the async connection
  xhr.open('GET', url, true);
  //data 
  xhr.onload = function () {
      if(this.status === 200){
            let response = JSON.parse(this.responseText);
            let result = response.results;

            let htmlTitle =  `<h2>lets see some names</h2>`;

            
            htmlTitle += '<ul class="lista">';

            result.forEach((item) => {
                htmlTitle += `
                    <li>${item.name.first}</li>
                `
            })

            htmlTitle += '</ul>'
            

            document.getElementById('result').innerHTML = htmlTitle;
      }
  }
  //send request
  xhr.send();

}

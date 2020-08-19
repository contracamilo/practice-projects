document.getElementById ('txtBtn').addEventListener ('click', loadTxt);
document
  .getElementById ('jsonBtn')
  .addEventListener ('click', loadCharacterApi);
const resultContainer = document.getElementById ('result');

function loadTxt () {
  fetch ('data.txt')
    .then (res => res.text ())
    .then (data => {
      resultContainer.innerHTML = `${data}`;
    })
    .catch (error => console.error (error.message));
}

const characterUI = (character = {}) => {
	return `<div class="card">
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="${character.name}">
                <ul>
                    <li>Species: ${character.species}</li>
                    <li>Dimension: ${character.origin.name}</li>
                    <li>Gender: ${character.gender}</li>
                </ul>
            </div>`;
};

function loadCharacterApi() {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch ('https://rickandmortyapi.com/api/character', requestOptions)
    .then (response => response.json ())
    .then (result => {
      let info = result.results;
      let html = '';
      info.forEach((character) => {
        html += characterUI(character);
      });
      resultContainer.innerHTML = html;
    })
    .catch (error => error);
}

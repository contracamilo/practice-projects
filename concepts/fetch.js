const callApi = () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    return fetch("https://rickandmortyapi.com/api/character", requestOptions)
    .then(response => response.text())
    .then(result =>  result)
    .catch(error => error);
    

  }
const url = 'https://jsonplaceholder.typicode.com/';
const appContainer = document.getElementById('app');

const readTodos = async (route) => {
    let response = await fetch(`${url}${route}`);
    let data = await response.json();

    return data;
}

const renderUi = (info = []) => {
    let html = '';

    info.forEach((item) => {
        html += `
            <div class="item">
               <b>${item.id}</b> ${item.title}
            </div>
        `  
    });

    appContainer.innerHTML =  html;
}

readTodos('todos').then(info => renderUi(info));






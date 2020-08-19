const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);

var btn = document.createElement("Button");
btn.addEventListener('click', increment);

btn.innerHTML = "0";
btn.id = "btn";
btn.className = "btnClass";

document.body.appendChild(btn);

function increment(e){
    console.log(e.target.innerText++);
    btn.innerHTML = e.target.innerText++;
}

function cargarAPI() {
     // crear el objeto
    const xhr = new XMLHttpRequest();
     // abrir la conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
     // Carga y leer datos
    xhr.onload = function() {
         if(this.status === 200) {
             const respuesta = JSON.parse( this.responseText );

             let contenido = '';
             respuesta.forEach(function(post) {
               contenido += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
               `;
             });
             document.getElementById('listado').innerHTML = contenido;
         }
    }
    // enviar la conexion
    xhr.send();
}
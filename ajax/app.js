document.getElementById('load').addEventListener('click', loadData);


function loadData() {
     // Create and xmlhttprequest object
     const xhr = new XMLHttpRequest();
     
     // open a connection
     xhr.open('GET', 'data.txt', true);

     xhr.onreadystatechange = function(){

          console.log(`State ${this.readyState}`);

          if(this.readyState === 4 && this.status === 200) {
               document.getElementById('list').innerHTML = `${this.responseText}`
               console.log(this.responseText);
          }
     }

     // Ready status
     /*
     0 - No initialized
     1.- Connection established
     2.- Received
     3:  Processing
     4:  Response ready
     */


     // send the request
     xhr.send();
}
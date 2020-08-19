//promise 

  
  const callApi = () => {
    let res = setTimeout(() => true, 4000);
    return res
  }
  
const waiting = new Promise((resolve, reject) => {
    let rej = callApi();

    if(rej){
        resolve('resolved')
    }else{
        reject('rejected')
    }
});

waiting.then((info) => {
    console.log(info);
}).catch((error) => {
    console.log('rejected', error)
});
//promise is javsscript object that represents eventaul completion/failure of an asynchronus object

let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(200); //result
    }, 2000);
})

promise.then(function(result){
    console.log(result);
    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(2000);//result2
        }, 3000);
    })
    return promise2;
}).then((reeult2)=>{
    console.log(reeult2);
})
// Promise.all polyfill

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('promise1');
    },1000)
});

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('promise2');
    },100)
});

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('promise3');
    },100)
}); 

// Promise.all([promise1, promise2]).then(console.log).catch(console.log);

Promise.myall = function(promiseArr){
let result =[]
let counter =[]
return new Promise((resolve, reject)=>{
    promiseArr.forEach((promise, index) => {
        promise.then((res) =>{
            counter++;
            result[index] = res;
            if(counter ===  promiseArr.length){
                resolve(result)
            }
        })
        .catch(err =>{
            reject(err)
        })
    });
})
}

Promise.myall([promise1, promise2]).then(console.log).catch(console.log);
Promise.myall([promise1, promise2, promise3]).then(console.log).catch(console.log);


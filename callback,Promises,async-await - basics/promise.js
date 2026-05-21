let p =  new Promise((resolve, reject) => {
    let a = 1
    let b = 1
    if (a+b==3) {
       resolve(success)
    }
    else{
        reject(failed)
    }    
    })
p.then((message)=>{
    console.log("this is the .then message of promise " + message);
    }).catch((message) =>{
        console.log("this is th .catch message output" + message);
        
    })

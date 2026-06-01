const { log } = require("async")

function makeRequest(location){
    return new Promise((resolve, reject) =>{
console.log(`making request to ${location}`);
        if (location === 'Google') {
            resolve(`google say hi`)
        }
        else{
            reject(`we can only talk to google`)
        }
      })
}

function processRequest (response){
    return new Promise((resolve,reject)=>{
        console.log(`processing the resolve`);
        resolve(`Extra information + ${response}`)
    })
}
// makeRequest(`Facebook`).then(response =>{
//         console.log(`Response Received`);
//         return processRequest(response)
// }).then(processResponse =>{
//     console.log(processResponse);
// }).catch(err =>{
//     console.log(err);
    
// })

async function dowork() {
    try{ 
          const response = await makeRequest(`Facebook`)
    console.log(`Response received`);
    const processedResponse = await processRequest(response)
    console.log(processedResponse);
    }catch (err){
        console.log(err);
    }

    }

dowork()
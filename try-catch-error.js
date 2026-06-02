// Error = an object that is created to  represent a problem that occurs 
//          occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error 
// catch  { } = catch and handle any thrown Errors from try{ }
// finally { } =(optional) always executes. used mostly for clean up
//           ex.close files,close connections,release resources  



try{
    const divided = Number(window.prompt("Enter a dividend: "))
    const divisor = Number(window.prompt("Enter a divisor: "))

    if(divisor ==0 ){
        throw new Error("You can't divide by  zero " )
    }
    if (isNaN(divided)|| isNaN(divisor)) {
        throw new Error("values must be a number");
        
    }

    const result = dividend / divisor ;
    console.log(result);
    
}
catch(error){
    console.error(error);
    
}

console.log("you have reached the end");

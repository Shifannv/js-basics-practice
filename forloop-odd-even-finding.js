let numbers = [3,2,4,5,6,7,8,9]  
for( let i = 0; i<numbers.length ; i++){ 
// "numbers.length" is call all in the array to print output 
// i=0 first index is 3 it will call first then go to 2nd index is 3 .
// i++ is increamnet like its add one type  + 1  and there is also decreament in i-- it less it -1 order type
//there is another i +=2 it add 2+2 order type 

if( numbers[i] % 2 == 0 ){  // % is which is reminder in division it wil the answer
// so the  numbers[i] % 2 == 0 to check the even numbers in the [3,2,4,5,6,7,8,9] it will compare every number 
console.log(numbers[i]+" " +"even number")
console.log("new line")
}
else //the else and if are both answer will get it last ly what was pending data it will get on the output they are same but the else was symbol to write
 if( numbers[i] % 2 !== 0) 
{
                  console.log(numbers[i]+" "+"odd number")

}
}
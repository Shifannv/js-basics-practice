let nums = [ 220 ,220 ,500,670,780,990, 880, 1000]
highNumber = nums[1]
for ( let i = 0 ; i<nums.length ; i++){
    
    if(nums[i] <highNumber ){
        highNumber = nums[i]
    }
}
console.log(highNumber);

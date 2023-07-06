function containsDuplicate(nums){

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if(i === j){
                continue;
            }
            if(num === nums[j]){
                return true;
            }
            
        }
        
    }

    return false;


}


console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
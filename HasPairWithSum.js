function hasPairWithSum(numbers, sum){

    let len = numbers.length;
    for (let i = 0; i < len -1; i++) {
        for (let j = i+1; j < len; j++) {            
            if(numbers[i] + numbers[j] === sum){            
                return true;
           }
        }
        
    }
    return false;

}

function hasPairWithSum1(numbers, sum){
    const numbersSet = new Set();      

    for (let i = 0; i < numbers.length; i++) {
        if(numbersSet.has(numbers[i])){
            return true;
        }
        numbersSet.add(sum - numbers[i])
    }
    return false;

}


let numbers = [6,4,4,2,1,7]
let sum = 19;

console.log(`Response: ${hasPairWithSum(numbers, sum)}`);
console.log(`Response: ${hasPairWithSum1(numbers, sum)}`);
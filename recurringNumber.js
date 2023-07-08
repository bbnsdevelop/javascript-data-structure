function recurringNumber(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i]
        } 
        else {
            map[input[i]] = i;
        }
    }
    return undefined
}




array1 = [2,5,1,2,3,5,1,2,4];
array2 = [2,1,1,2,3,5,1,2,4];
array3 = [2,3,4,5];

console.log(recurringNumber(array1));
console.log(recurringNumber(array2));
console.log(recurringNumber(array3));
function existItemInAnArrays(array1, array2){


    for (let index = 0; index < array1.length; index++) {
        const element = array1[index];
        if(array2.includes(element)){
            return true;
        }   

    }

    return false;

}

// another way for the same result

function existItemInAnArrays1(array1, array2){
    return array1.some(item => array2.includes(item));    
}

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'f', 'd'];

console.log(`Response: ${existItemInAnArrays(array1, array2)}`);
console.log(`Response: ${existItemInAnArrays(array1, array1)}`);

console.log('-------------------------------------------------');

console.log(`Response: ${existItemInAnArrays1(array1, array2)}`);
console.log(`Response: ${existItemInAnArrays1(array1, array1)}`);

function pairsNumbers(numbers){
    let pairs = new Array();
    numbers.forEach(n => {
        if((n % 2) === 0){
            pairs.push(n);
        }
    });

    pairs.forEach(n =>{
        console.log(n);
    });
}

let numbers = [1,2,3,4,5,6,7,8,9,10];

pairsNumbers(numbers)
function reverse(){
    let name = "Bruno";
    let convertToArray = name.split("");
    let b = [];
    for(i = convertToArray.length -1; i >= 0; i--){
        if(i === (convertToArray.length -1)){
            b.push(convertToArray[i].toLocaleUpperCase());
        }
        else if(i === 0){
            b.push(convertToArray[i].toLocaleLowerCase());
        }
        else{
            b.push(convertToArray[i]);
        }
    }

    console.log(b.join(""));
}


function reverse1(){
    let name = "Bruno";
    console.log(name.split("").reverse().join(""));
}

const reverse2 = str => [... str].reverse().join('');



reverse();
reverse1();


console.log(reverse2("Bruno"));
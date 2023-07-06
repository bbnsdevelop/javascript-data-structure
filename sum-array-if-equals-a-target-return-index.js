function sumValuesFromArrayWhetherEqualsTargetReturnIndex(array, target){

    

    for(let i = 0; i < array.length; i++){
        let indexZero = array[i];
        for (let j = 1; j < array.length; j++) {
            const sum = indexZero + array[j];
            if(sum === target){
                if(i === j ){
                    continue;
                }
                return [i, j];
            }           
    
        }
        
    }

}


console.log(sumValuesFromArrayWhetherEqualsTargetReturnIndex([3, 3], 6));
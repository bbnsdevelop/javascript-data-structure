function mergeSortedArrays(array1, array2){
    const setArray = new Set();
    
    array1.forEach(element => {
        setArray.add(element);
    });

    array2.forEach(element => {
        setArray.add(element);
    });
    
    console.log(Array.from(setArray).sort((a, b) => a - b));
}


mergeSortedArrays([0,1,2,3,4,5,6,31], [4,6,30]);
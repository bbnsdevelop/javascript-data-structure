const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = Array(10000).fill('nemo');

function findNemo(array){  
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found Nemo'); 
            break 
        }
    }

    //ES5
    /*
    array.forEach(function(item){
        if(item === 'nemo'){
            console.log('Found Nemo');                         
        }
    });
    */

    // ES6
    /*
    array.forEach(element => {
        if(element === 'nemo'){
            console.log('Found Nemo');                         
        }
    });
    */
}

// findNemo(nemo);
findNemo(everyone);
//findNemo(large);
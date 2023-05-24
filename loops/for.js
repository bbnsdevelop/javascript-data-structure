const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = Array(10000).fill('nemo');

function findNemo(array){  
    let time0 = performance.now();  
   
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found Nemo'); 
            break    
        }
    }

    let time1 = performance.now();

    console.log(`Call to find nem took ${(time1 - time0)} milliseconds`)
}

// findNemo(nemo);
// findNemo(everyone);
findNemo(large);
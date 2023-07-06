function rotate(nums, k){

    const rotations = k % nums.length;

  // Rotate the array by splicing and rejoining
  const rotatedPart = nums.splice(nums.length - rotations);
  nums.unshift(...rotatedPart);
  
  return nums;

}


const nums = [-1,-100,3,99];
const k = 2
console.log(rotate(nums, k));
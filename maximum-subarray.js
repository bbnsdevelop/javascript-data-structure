const maxSubarraySum = (nums) => {
    let currentSum = 0;
    
    return nums.reduce((maxSum, num) => {
      currentSum = Math.max(num, currentSum + num);
      return Math.max(maxSum, currentSum);
    }, nums[0]);
  };
  
  // Example usage
  const nums = [5,4,-1,7,8];
  const largestSum = maxSubarraySum(nums);
  console.log(largestSum);
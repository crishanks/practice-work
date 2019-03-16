//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length - 1;) {
    console.log(nums)
    const currentNum = nums[i];
    const checkNum = nums[i + 1];
    if (checkNum === currentNum) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
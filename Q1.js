// Q2 - Two Sum
// Runtime - 72 ms - 93.29 percentile
// Memory - 38.5 MB - 88.57 percentile

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let match_index = {};
  for (let i = 0; i < nums.length; ++i) {
    let y = nums[i];
    if (match_index[y] >= 0) {
      return [match_index[y], i];
    }
    match_index[target - y] = i;
  }
};

// Q11 - Container With Most Water
// Runtime - 84 ms - 91.86 percentile
// Memory - 47.1 MB - 93.51 percentile

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));

    if (height[left] > height[right]) {
      let curr = height[right];
      --right;
      while (left < right && height[right] < curr) {
        --right;
      }
    } else {
      let curr = height[left];
      ++left;
      while (left < right && height[left] < curr) {
        ++left;
      }
    }
  }
  return max;
};

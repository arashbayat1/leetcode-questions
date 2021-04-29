// Q9 - Palidrome Number
// Runtime - 184 ms - 99.58 percentile
// Memory - 48.2 MB - 93.94 percentile

var isPalindrome = function (x) {
  if (x < 0 || (x != 0 && x % 10 == 0)) {
    return false;
  }
  let y = 0;
  while (x > y) {
    y = y * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x == y || x == Math.floor(y / 10);
};

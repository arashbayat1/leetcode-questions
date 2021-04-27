// Q5 - Longest Palindromic Substring
// Runtime - 88 ms - 99.27 percentile
// Memory - 41.3 MB - 68.39 percentile

var splitPalindrome = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] == s[right]) {
    --left;
    ++right;
  }
  return s.slice(left + 1, right);
};

var longestPalindrome = function (s) {
  let longest_str = '';

  for (let i = 0; i < s.length; ++i) {
    let l1 = splitPalindrome(s, i, i);
    let l2 = splitPalindrome(s, i, i + 1);
    if (l1.length > longest_str.length || l2.length > longest_str.length) {
      longest_str = l1.length > l2.length ? l1 : l2;
    }
  }
  return longest_str;
};

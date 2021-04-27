// Q13 - Roman to Integer
// Runtime - 156 ms - 88.39 percentile
// Memory - 43.9 MB - 96.86 percentile

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let n = 0;
  let i = 0;
  const con = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (; i < s.length - 1; ++i) {
    if (s[i] == 'C' && (s[i + 1] == 'D' || s[i + 1] == 'M')) {
      n -= 100;
    } else if (s[i] == 'X' && (s[i + 1] == 'L' || s[i + 1] == 'C')) {
      n -= 10;
    } else if (s[i] == 'I' && (s[i + 1] == 'V' || s[i + 1] == 'X')) {
      n -= 1;
    } else {
      n += con[s[i]];
    }
  }
  return n + con[s[i]];
};

// Q7 - Reverse Integer
// Runtime - 92 ms - 87.10 percentile
// Memory - 40 MB - 81.98 percentile

/**
 * @param {number} x
 * @return {number}
 */

var swap = function (n, a, b) {
  let c = n[a];
  n[a] = n[b];
  n[b] = c;
};

var reverse = function (x) {
  let n = String(Math.abs(x)).split('');
  let half = Math.floor(n.length / 2);
  for (let i = 0; i < half; ++i) {
    swap(n, i, n.length - 1 - i);
  }
  n = n.join('');
  return n > 2147483648 ? 0 : x < 0 ? -n : n;
};

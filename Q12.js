// Q12 - Integer to Roman
// Runtime - 148 ms - 93.55 percentile
// Memory - 43.9 MB - 96.14 percentile

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let x = '';
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

  for (let i = 0; i < 13 && num; ++i) {
    let y = vals[i];
    while (num >= y) {
      x += romans[i];
      num -= y;
    }
  }
  return x;
};

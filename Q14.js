// Q14 - Longest Common Prefix
// Runtime - 72 ms - 98.20 percentile
// Memory - 39.6 MB - 53.73 percentile

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  let pre = strs[0];
  for (let i = 1; i < strs.length; ++i) {
    for(let j = 0; j <= pre.length; ++j) {
      let comp = strs[i];
      if(j == comp.length) {
        pre = comp;
      } else if(pre[j] != comp[j]) {
        pre = pre.slice(0,j);
        break;
      }
    }
  }
  return pre;
};
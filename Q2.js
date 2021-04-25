// Q2 - Add 2 Numbers
// Runtime - 108 ms - 99.96 percentile
// Memory - 43.9 MB - 73.36 percentile

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let l1_current = l1;
  let l2_current = l2;
  while (l1_current) {
    if (l2_current) {
      l1_current.val += l2_current.val;
      l2_current = l2_current.next;
    }
    if (l1_current.val >= 10) {
      l1_current.val -= 10;
      if (l1_current.next) {
        ++l1_current.next.val;
      } else {
        l1_current.next = new ListNode(1);
      }
    }
    if (l1_current.next == null) break;
    l1_current = l1_current.next;
  }

  while (l2_current) {
    l1_current.next = l2_current;
    l1_current = l1_current.next;
    l2_current = l2_current.next;
  }
  return l1;
};
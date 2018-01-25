/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (39.84%)
 * Total Accepted:    300.4K
 * Total Submissions: 750.7K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const ListNode=(val) => {
    this.val = val
    this.next = null
}
const mergeTwoLists = (l1, l2) => {
    let ans = []
    while (l1) {
      ans.push(new ListNode(l1.val))
      l1 = l1.next
    }
    while (l2) {
      ans.push(new ListNode(l2.val))
      l2 = l2.next
    }
  
    ans.sort((a, b) => a.val - b.val)
  
    if (!ans.length) return null
  
    for (var i = 0; i < ans.length - 1; i++)
      ans[i].next = ans[i + 1]
  
    return ans[0]
  }
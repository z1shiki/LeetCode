/*
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (38.84%)
 * Total Accepted:    197.3K
 * Total Submissions: 507.3K
 * Testcase Example:  '[]'
 *
 * 
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * 
 * 
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
 * 
 * 
 * Your algorithm should use only constant space. You may not modify the values
 * in the list, only nodes itself can be changed.
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val
    this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
    let point = new ListNode(0)
    point.next = head
    let result = point

    while (point) {
        if (!point.next || (point.next && !point.next.next)) break
        let next = point.next
        let right = point.next.next.next
        point.next = point.next.next
        point.next.next = next
        next.next = right

        point = point.next.next
    }
    return result.next
};
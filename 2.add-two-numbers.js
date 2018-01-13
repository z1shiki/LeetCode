/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (28.25%)
 * Total Accepted:    416.6K
 * Total Submissions: 1.5M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * 
 * Example
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
const addTwoNumbers = (l1, l2) => {
    let carrier = 0
    let nextNode = new ListNode(0)
    let head = nextNode
    while (true) {
        if (l1) {
            nextNode.val += l1.val
            l1 = l1.next
        }
        if (l2) {
            nextNode.val += l2.val
            l2 = l2.next
        }
        if (nextNode.val > 9) {
            nextNode.val %= 10
            carrier = 1
        }
        if (carrier === 0 && l1 === null && l2 === null) {
            return head
        }
        nextNode.next = new ListNode(carrier)
        nextNode = nextNode.next
        carrier = 0
    }
    return result.next
};
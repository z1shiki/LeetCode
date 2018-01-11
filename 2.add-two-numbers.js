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
    if (!l1 && !l2) return null

    let carrier = 0
    let res = ''

    while (l1 || l2) {
        let v1
        let v2
        v1 = l1 ? l1.val : 0
        v2 = l2 ? l2.val : 0
        let sum = v1 + v2 + carrier
        if (sum > 9) {
            carrier = 1
            sum = sum % 10
        } else {
            carrier = 0
        }
        res = sum + res
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    if (carrier) res = '1' + res

    let head = new ListNode(Number(res[res.length - 1]))
    let result = head
    let pos = res.length - 2
    while (pos > -1) {
        head.next = new ListNode(Number(res[pos]))
        head = head.next
        pos--
    }
    return result
};
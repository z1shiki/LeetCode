/*
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (34.10%)
 * Total Accepted:    220.2K
 * Total Submissions: 644.9K
 * Testcase Example:  '[1]\n1'
 *
 * Given a linked list, remove the nth node from the end of list and return its
 * head.
 * 
 * 
 * For example,
 * 
 * 
 * ⁠  Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * ⁠  After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * 
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const ListNode = (val) => {
    this.val = val
    this.next = null
}

const removeNthFromEnd = (head, n) => {
    let parentNode = null
    let currentNode = head
    let count = 0
    while (currentNode) {
        count++
        if(count ==(n+1)){
            parentNode = head
        }else if(count>n+1){
            parentNode=parentNode.next
        }
        currentNode = currentNode.next
    }

    if(n>count)return head
    if(!parentNode){
        currentNode=head.next
        delete head
        return currentNode
    }
    currentNode = parentNode.next
    if(currentNode)
        parentNode.next = currentNode.next
        delete currentNode
        return head
};


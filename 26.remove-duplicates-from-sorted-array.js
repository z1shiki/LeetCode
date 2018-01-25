/*
 * [26] Remove Duplicates from Sorted Array
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (35.81%)
 * Total Accepted:    308.8K
 * Total Submissions: 859.6K
 * Testcase Example:  '[1,1,2]'
 *
 * 
 * Given a sorted array, remove the duplicates in-place such that each element
 * appear only once and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 * 
 * 
 * Example:
 * 
 * Given nums = [1,1,2],
 * 
 * Your function should return length = 2, with the first two elements of nums
 * being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the new length.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            nums.splice(i, 1)
            i--
        } else set.add(nums[i])
    }
    return nums.length
}
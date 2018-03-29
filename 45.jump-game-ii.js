/*
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (26.18%)
 * Total Accepted:    112.9K
 * Total Submissions: 432.4K
 * Testcase Example:  '[0]'
 *
 * 
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * 
 * Each element in the array represents your maximum jump length at that
 * position. 
 * 
 * 
 * Your goal is to reach the last index in the minimum number of jumps.
 * 
 * 
 * 
 * For example:
 * Given array A = [2,3,1,1,4]
 * 
 * 
 * The minimum number of jumps to reach the last index is 2. (Jump 1 step from
 * index 0 to 1, then 3 steps to the last index.)
 * 
 * 
 * 
 * Note:
 * You can assume that you can always reach the last index.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
    const length = nums.length
    if (length < 2) return 0
    let step = 0
    let curReach = 0
    let maxReach = 0
    let i = 0
    while (curReach - (i - 1) > 0) {
        step++
        while (i <= curReach) {
            maxReach = Math.max(maxReach, nums[i] + i)
            if (maxReach >= length - 1) return step
            i++
        }
        curReach = maxReach
    }
    return 0
};
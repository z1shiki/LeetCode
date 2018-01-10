/*
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (21.81%)
 * Total Accepted:    281K
 * Total Submissions: 1.3M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array S of n integers, are there elements a, b, c in S such that a
 * + b + c = 0? Find all unique triplets in the array which gives the sum of
 * zero.
 * 
 * Note: The solution set must not contain duplicate triplets.
 * 
 * 
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((a, b) => {
        return a - b
    })
    let target = []
    let result = []
    let len = nums.length-2
    for (let i = 0; i < len; i++) {
        if (target === nums[i]) {
            continue;
        } else {
            target = nums[i]
        }
        let low = i + 1
        let high = len - 1
        while (low < high) {
            if (nums[low] + nums[high] === -target) {
                result.push([target, nums[low], nums[high]])
                do {
                    low++
                } while (nums[low] === nums[low - 1])
            } else if (nums[low] + nums[high] < -target) {
                low++
            } else {
                high--
            }
        }
    }
    return result
};
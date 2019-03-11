/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 *
 * https://leetcode.com/problems/contiguous-array/description/
 *
 * algorithms
 * Medium (42.29%)
 * Total Accepted:    35.2K
 * Total Submissions: 83.2K
 * Testcase Example:  '[0,1]'
 *
 * Given a binary array, find the maximum length of a contiguous subarray with
 * equal number of 0 and 1.
 *
 *
 * Example 1:
 *
 * Input: [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with equal number of
 * 0 and 1.
 *
 *
 *
 * Example 2:
 *
 * Input: [0,1,0]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal
 * number of 0 and 1.
 *
 *
 *
 * Note:
 * The length of the given binary array will not exceed 50,000.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = nums => {
  const { length } = nums
  if (length === 0) return 0
  const hash = {}
  let sum = 0
  let result = 0
  for (let i = 0; i < length; ++i) {
    sum += nums[i] ? 1 : -1
    if (sum === 0) {
      result = i + 1
    } else if (sum in hash) {
      result = Math.max(result, i - hash[sum])
    } else hash[sum] = i
  }
  return result
}

const findMaxLength2 = nums => {
  const { length } = nums
  if (length === 0) return 0
  const array = Array(2 * length + 1).fill(-1)
  let sum = 0
  let result = 0
  for (let i = 0; i < length; ++i) {
    sum += nums[i] ? 1 : -1
    if (sum === 0) {
      result = i + 1
    } else if (array[sum + length] !== -1) {
      result = Math.max(result, i - array[sum + length])
    } else array[sum + length] = i
  }
  return result
}

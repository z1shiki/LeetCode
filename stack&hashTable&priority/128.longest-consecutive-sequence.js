/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 *
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Hard (40.70%)
 * Total Accepted:    192.9K
 * Total Submissions: 470.7K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence.
 *
 * Your algorithm should run in O(n) complexity.
 *
 * Example:
 *
 *
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
 * Therefore its length is 4.
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = nums => {
  const hash = {}
  let answer = 1
  if (nums.length === 0) return 0
  for (let i = 0; i < nums.length; ++i) {
    const key = nums[i]
    if (hash[key]) continue
    hash[key] = 1
    if (hash[key - 1] && hash[key + 1]) {
      const l = hash[key - 1]
      const r = hash[key + 1]
      const t = l + r + 1
      hash[key - l] = t
      hash[key + r] = t
      answer = answer > t ? answer : t
    } else if (hash[key - 1]) {
      const l = hash[key - 1]
      hash[key - l] = l + 1
      hash[key] = hash[key - l]
      answer = answer > l + 1 ? answer : l + 1
    } else if (hash[key + 1]) {
      const l = hash[key + 1]
      hash[key + l] = l + 1
      hash[key] = hash[key + l]
      answer = answer > l + 1 ? answer : l + 1
    }
  }
  return answer
}

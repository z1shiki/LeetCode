/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 *
 * https://leetcode.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (36.86%)
 * Total Accepted:    139.8K
 * Total Submissions: 376.1K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * Given an array nums, there is a sliding window of size k which is moving
 * from the very left of the array to the very right. You can only see the k
 * numbers in the window. Each time the sliding window moves right by one
 * position. Return the max sliding window.
 *
 * Example:
 *
 *
 * Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 *
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 *
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty
 * array.
 *
 * Follow up:
 * Could you solve it in linear time?
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function MontonicQueue() {
  let queue = []
  this.push = e => {
    if (queue.length === 0) {
      queue.push(e)
    } else if (e > queue[0]) queue = [e]
    else {
      queue.push(e)
    }
  }
  this.pop = () => {
    queue.shift()
    let max = -Infinity
    let point = 0
    for (let i = 0; i < queue.length; ++i) {
      if (queue[i] > max) {
        max = queue[i]
        point = i
      }
    }
    queue.splice(0, point)
  }
  this.max = () => queue[0]
}
const maxSlidingWindow = (nums, k) => {
  const ans = []
  const q = new MontonicQueue()
  for (let i = 0; i < nums.length; ++i) {
    q.push(nums[i])
    if (i - k + 1 >= 0) {
      ans.push(q.max())
      if (nums[i - k + 1] === q.max()) {
        q.pop()
      }
    }
  }
  return ans
}

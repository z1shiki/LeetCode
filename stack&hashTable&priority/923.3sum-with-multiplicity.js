/*
 * @lc app=leetcode id=923 lang=javascript
 *
 * [923] 3Sum With Multiplicity
 *
 * https://leetcode.com/problems/3sum-with-multiplicity/description/
 *
 * algorithms
 * Medium (31.61%)
 * Total Accepted:    7.8K
 * Total Submissions: 23.9K
 * Testcase Example:  '[1,1,2,2,3,3,4,4,5,5]\n8'
 *
 * Given an integer array A, and an integer target, return the number of tuples
 * i, j, k such that i < j < k and A[i] + A[j] + A[k] == target.
 *
 * As the answer can be very large, return it modulo 10^9 + 7.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: A = [1,1,2,2,3,3,4,4,5,5], target = 8
 * Output: 20
 * Explanation:
 * Enumerating by the values (A[i], A[j], A[k]):
 * (1, 2, 5) occurs 8 times;
 * (1, 3, 4) occurs 8 times;
 * (2, 2, 4) occurs 2 times;
 * (2, 3, 3) occurs 2 times.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: A = [1,1,2,2,2,2], target = 5
 * Output: 12
 * Explanation:
 * A[i] = 1, A[j] = A[k] = 2 occurs 12 times:
 * We choose one 1 from [1,1] in 2 ways,
 * and two 2s from [2,2,2,2] in 6 ways.
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 3 <= A.length <= 3000
 * 0 <= A[i] <= 100
 * 0 <= target <= 300
 *
 */
/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
// const factorial = (m, n) => {
//   let num = 1
//   let count = 0
//   for (let i = m; i > 0; --i) {
//     if (count === n) break
//     num *= i
//     ++count
//   }
//   return num
// }
// const combination = (m, n) => factorial(m, n) / factorial(n, n)
const threeSumMulti = (A, target) => {
  const kmax = 100
  const kmod = 1e9 + 7
  const hash = []
  let answer = 0
  for (let i = 0; i < A.length; i++) {
    hash[A[i]] = hash[A[i]] ? ++hash[A[i]] : 1
  }
  for (let i = 0; i <= target; ++i) {
    for (let j = i; j <= target; ++j) {
      const k = target - i - j
      if (k < 0 || k > kmax || k < j) continue
      if (!hash[i] || !hash[j] || !hash[k]) continue
      if (i === j && j === k) {
        answer += ((hash[i] - 2) * (hash[i] - 1) * hash[i]) / 6
      } else if (i === j && j !== k) {
        answer += ((hash[i] * (hash[i] - 1)) / 2) * hash[k]
      } else if (i !== j && j === k) {
        answer += ((hash[j] * (hash[j] - 1)) / 2) * hash[i]
      } else {
        answer += hash[i] * hash[j] * hash[k]
      }
    }
  }
  return answer % kmod
}

/* 3sum系问题 将其中一个转化为另外目标减去另外两个数字 */

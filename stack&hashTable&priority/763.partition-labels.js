/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 *
 * https://leetcode.com/problems/partition-labels/description/
 *
 * algorithms
 * Medium (68.03%)
 * Total Accepted:    37.3K
 * Total Submissions: 54.4K
 * Testcase Example:  '"ababcbacadefegdehijhklij"'
 *
 *
 * A string S of lowercase letters is given.  We want to partition this string
 * into as many parts as possible so that each letter appears in at most one
 * part, and return a list of integers representing the size of these parts.
 *
 *
 * Example 1:
 *
 * Input: S = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation:
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it
 * splits S into less parts.
 *
 *
 *
 * Note:
 * S will have length in range [1, 500].
 * S will consist of lowercase letters ('a' to 'z') only.
 *
 */
/**
 * @param {string} S
 * @return {number[]}
 */

const partitionLabels = S => {
  const hash = Array(26).fill(0)
  for (let i = 0; i < 26; i++) {
    hash[i] = []
  }
  for (let i = 0; i < S.length; ++i) {
    hash[S.charCodeAt(i) - 97] = [i]
  }
  const result = []
  let begin = 0
  let end = 0
  for (let i = 0; i < S.length; ++i) {
    end = Math.max(hash[S.charCodeAt(i) - 97], end)
    if (i === end) {
      result.push(end - begin + 1)
      begin = i + 1
    }
  }
  return result
}

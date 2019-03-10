/*
 * @lc app=leetcode id=792 lang=javascript
 *
 * [792] Number of Matching Subsequences
 *
 * https://leetcode.com/problems/number-of-matching-subsequences/description/
 *
 * algorithms
 * Medium (40.96%)
 * Total Accepted:    16.3K
 * Total Submissions: 39.7K
 * Testcase Example:  '"abcde"\n["a","bb","acd","ace"]'
 *
 * Given string S and a dictionary of words words, find the number of words[i]
 * that is a subsequence of S.
 *
 *
 * Example :
 * Input:
 * S = "abcde"
 * words = ["a", "bb", "acd", "ace"]
 * Output: 3
 * Explanation: There are three words in words that are a subsequence of S:
 * "a", "acd", "ace".
 *
 *
 * Note:
 *
 *
 * All words in words and S will only consists of lowercase letters.
 * The length of S will be in the range of [1, 50000].
 * The length of words will be in the range of [1, 5000].
 * The length of words[i] will be in the range of [1, 50].
 *
 *
 */
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = (S, words) => {
  const hash = Array(26)
  for (let i = 0; i < hash.length; ++i) {
    hash[i] = []
  }
  for (let i = 0; i < S.length; ++i) {
    hash[S[i].charCodeAt(0) - 97].push(i)
  }
  const binarySearch = (val, arr) => {
    l = 0
    r = arr.length - 1
    let mid = 0
    let id = 0
    while (l <= r) {
      mid = l + parseInt((r - l) / 2)
      if (arr[mid] > val) {
        id = mid
        r = mid - 1
      } else l = mid + 1
    }
    if(r == arr.length -1) return -1
    return id
  }
  const isMatch = word => {
    let l = -1
    for (const item of word) {
      const x = item.charCodeAt(0) - 97
      let index = binarySearch(l, hash[x])
      if (index<0||index >= hash[x].length) return false
      l = hash[x][index]
    }
    return true
  }
  let result = 0
  for (let i = 0; i < words.length; ++i) {
    if (isMatch(words[i])) ++result
  }
  return result
}

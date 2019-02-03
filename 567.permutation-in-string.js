/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 *
 * https://leetcode.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (37.11%)
 * Total Accepted:    37.8K
 * Total Submissions: 101.3K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * Given two strings s1 and s2, write a function to return true if s2 contains
 * the permutation of s1. In other words, one of the first string's
 * permutations is the substring of the second string.
 *
 * Example 1:
 *
 * Input:s1 = "ab" s2 = "eidbaooo"
 * Output:True
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 *
 *
 * Example 2:
 *
 * Input:s1= "ab" s2 = "eidboaoo"
 * Output: False
 *
 *
 *
 * Note:
 *
 * The input strings only contain lower case letters.
 * The length of both given strings is in range [1, 10,000].
 *
 *
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    const l1 = s1.length
    const l2 = s2.length
    let c1 = Array(26).fill(0)
    let c2 = Array(26).fill(0)

    for (char of s1) {
        c1[char.charCodeAt(0) - 97]++
    }
    for (let i = 0; i < l2; ++i) {
        if (i >= l1) {
            --c2[s2[i - l1].charCodeAt(0) - 97]
        }
        ++c2[s2[i].charCodeAt(0) - 97]
        if (equalAr(c1,c2)) return true
    }
    return false
}

const equalAr=(a, b) =>{
    // if (a.length !== b.length) {
    //     return false
    // } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    // }
}
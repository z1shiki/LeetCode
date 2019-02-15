/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 *
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Easy (36.10%)
 * Total Accepted:    104.3K
 * Total Submissions: 289.1K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * Given a string s and a non-empty string p, find all the start indices of p's
 * anagrams in s.
 *
 * Strings consists of lowercase English letters only and the length of both
 * strings s and p will not be larger than 20,100.
 *
 * The order of output does not matter.
 *
 * Example 1:
 *
 * Input:
 * s: "cbaebabacd" p: "abc"
 *
 * Output:
 * [0, 6]
 *
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of
 * "abc".
 *
 *
 *
 * Example 2:
 *
 * Input:
 * s: "abab" p: "ab"
 *
 * Output:
 * [0, 1, 2]
 *
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 *
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
    const l1 = s.length
    const l2 = p.length
    let c1 = Array(26).fill(0)
    let c2 = Array(26).fill(0)
    let result = []

    for (char of p) {
        c2[char.charCodeAt(0) - 97]++
    }
    for (let j = 0; j < l1; ++j) {
        if (j >= l2) {
            --c1[s[j - l2].charCodeAt(0) - 97]
        }
        ++c1[s[j].charCodeAt(0) - 97]
        if (equalAr(c1, c2)) {
            result.push(j - l2 + 1)
        }
    }
    return result
}
const equalAr = (a, b) => {
    // if (a.length !== b.length) {
    //     return false
    // } else {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }
    return true
    // }
}
/*
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.15%)
 * Total Accepted:    272.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example:
 * 
 * Input: "babad"
 * 
 * Output: "bab"
 * 
 * Note: "aba" is also a valid answer.
 * 
 * 
 * 
 * Example:
 * 
 * Input: "cbbd"
 * 
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome1 = (s) => {
    let n = str.length - 1
    if (n == 0) return s
    let str = '~' + s.split('').join('#') + '#'
    let point = 1
    let length = 0
    for (let i = 1; i < n; i++) {
        let c = 1
        while (str[i - c] == str[i + c]) {
            c++
        }
        if (c > length) {
            length = c
            point = i
        }
    }
    let start = point - length + 1
    let end = point + length
    let result = str.slice(start, end).replace(/#/g, "").replace(/~/g, "")
    return result
};

const longestPalindrome = (s) => {
    let len = s.length -1
    if (len < 1) return s
    let minStart = 0
    let maxLen = 1
    for (let i = 0; i < len;) {
        let prev = i
        let next = i
        while (next < len && s[next + 1] === s[next]) ++next // Skip dunplicate characters
        i = next + 1
        while (next < len && prev > 0 && s[prev - 1] === s[next + 1]) {
            next++
            prev--
        }
        let curLen = next - prev + 1
        if (curLen > maxLen) {
            minStart = prev
            maxLen = curLen
        }
    }
    return s.substr(minStart, maxLen)
};

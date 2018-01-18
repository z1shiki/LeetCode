/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.57%)
 * Total Accepted:    237.5K
 * Total Submissions: 751.9K
 * Testcase Example:  '[]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if (strs.length == 0) return ''
    let result = ''

    for (let i = 0; i < len; i += 1) {
        if (!strs.every(e => e[i] === strs[0][i])) break
        result += strs[0][i]
    }
    return result
};
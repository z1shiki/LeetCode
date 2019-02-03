/*
 * @lc app=leetcode id=856 lang=javascript
 *
 * [856] Score of Parentheses
 *
 * https://leetcode.com/problems/score-of-parentheses/description/
 *
 * algorithms
 * Medium (54.65%)
 * Total Accepted:    13.8K
 * Total Submissions: 25.2K
 * Testcase Example:  '"()"'
 *
 * Given a balanced parentheses string S, compute the score of the string based
 * on the following rule:
 *
 *
 * () has score 1
 * AB has score A + B, where A and B are balanced parentheses strings.
 * (A) has score 2 * A, where A is a balanced parentheses string.
 *
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: "()"
 * Output: 1
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "(())"
 * Output: 2
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "()()"
 * Output: 2
 *
 *
 *
 * Example 4:
 *
 *
 * Input: "(()(()))"
 * Output: 6
 *
 *
 *
 *
 * Note:
 *
 *
 * S is a balanced parentheses string, containing only ( and ).
 * 2 <= S.length <= 50
 *
 *
 *
 *
 *
 *
 */
/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = S => {
    return score(S, 0, S.length - 1)
}
const score = (S, left, right) => {
    if (right - left == 1) return 1
    let balanced = 0
    for (let i = left; i < right; ++i) {
        if (S[i] == '(') ++balanced
        if (S[i] == ')') --balanced
        if (balanced == 0) {
            return score(S, left, i) + score(S, i + 1, right)
        }
    }
    return 2 * score(S, left + 1, right - 1)
}

const scoreOfParenthesesC = S => {
    let count = -1
    let length = S.length
    let result = 0
    for (let i = 0; i < length; ++i) {
        count += S[i] == '(' ? 1 : -1
        if (S[i] == '(' && S[i + 1] == ')') {
            result += Math.pow(2, count)
        }
    }
    return result
}


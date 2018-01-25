/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (33.79%)
 * Total Accepted:    286.6K
 * Total Submissions: 847.1K
 * Testcase Example:  '"["'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * The brackets must close in the correct order, "()" and "()[]{}" are all
 * valid but "(]" and "([)]" are not.
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const map = new Map([
        [']', '['],
        [')', '('],
        ['}', '{']
    ])
    let length = s.length
    if (length === 0) return true
    let stack = []
    for (let i = 0; i < length; i++) {
        let item = s[i]
        if (stack.length === 0) {
            stack.push(item)
            continue
        }
        if (stack.pop() === map.get(item)) {
            continue
        }
        return false
    }
    return true
};
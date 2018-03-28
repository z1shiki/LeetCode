/*
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (36.89%)
 * Total Accepted:    189.9K
 * Total Submissions: 512.1K
 * Testcase Example:  '[1,1]'
 *
 * Given n non-negative integers a1, a2, ..., an, where each represents a point
 * at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let left = 0
    let right = height.length - 1
    let result = 0
    let high = 0

    while (left < right) {
        let width = right - left
        if (height[left] > height[right]) {
            high = height[right]
            right--
        } else {
            high = height[left]
            left++
        }
        if (result < high * width) {
            result = high * width
        }
    }
    return result
};
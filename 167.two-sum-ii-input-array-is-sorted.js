/*
 * [167] Two Sum II - Input array is sorted
 *
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (47.20%)
 * Total Accepted:    116.7K
 * Total Submissions: 247.3K
 * Testcase Example:  '[2,3,4]\n6'
 *
 * Given an array of integers that is already sorted in ascending order, find
 * two numbers such that they add up to a specific target number.
 * 
 * The function twoSum should return indices of the two numbers such that they
 * add up to the target, where index1 must be less than index2. Please note
 * that your returned answers (both index1 and index2) are not zero-based.
 * 
 * You may assume that each input would have exactly one solution and you may
 * not use the same element twice.
 * 
 * 
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 * 
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let result = numbers[left] + numbers[right]
        if (result === target) {
            return [left + 1, right + 1];
        } else if (result > target) {
            right--
        } else {
            left++
        }
    }
}
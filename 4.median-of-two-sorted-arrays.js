/*
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (22.55%)
 * Total Accepted:    222.7K
 * Total Submissions: 987.5K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * Example 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * 
 * Example 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findKth = (a, m, b, n, k) => {
    if (m > n) {
        return findKth(b, n, a, m, k)
    }
    if (m === 0) {
        return b[k - 1]
    }
    if (k === 1)
        return Math.min(a[0], b[0])

    let pa = Math.min(k >> 1, m)
    let pb = k - pa
    if (a[pa - 1] < b[pb - 1])
        return findKth(a.slice(pa), m - pa, b, n, k - pa)
    else if (a[pa - 1] > b[pb - 1])
        return findKth(a, m, b.slice(pb), n - pb, k - pb)
    else return a[pa - 1]
}
const findMedianSortedArrays = (nums1, nums2) => {
    let length1 = nums1.length
    let length2 = nums2.length
    let total = length1 + length2
    let half = total >> 1
    if (total & 1) {
        return findKth(nums1, length1, nums2, length2, half + 1)
    } else return (
        findKth(nums1, length1, nums2, length2, half) +
        findKth(nums1, length1, nums2, length2, half + 1)) / 2
};

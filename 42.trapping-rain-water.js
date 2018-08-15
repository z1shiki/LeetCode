/*
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (37.95%)
 * Total Accepted:    171.1K
 * Total Submissions: 451K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 */
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
    let length = height.length
    let hole = Array(length)
    let n = 0
    let mx = 0
    let res =0
    for (let i = 0; i < length; i++) {
        hole[i]=mx
        mx=Math.max(mx,height[i])
    }
    mx=0
    for(let i =length-1;i>=0;i--){
        hole[i]=Math.min(mx,hole[i])
        mx=Math.max(mx,height[i])
        if(hole[i]>height[i])   res += hole[i]-height[i]
    }
    return res
};

// {
//     (function () {
//         let height = [0,1,0,2,1,0,1,3,2,1,2,1]
//         console.log(trap(height))
//     })()
// }

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
    let rp = height.length - 1
    let lp = 0
    let res = 0
    let level = 0
    while (lp < rp) {
        let lower = height[height[lp] < height[rp] ? lp++ : rp--]
        level = Math.max(level, lower)
        res += level - lower
    }
    return res
};

function Stack(){
    let items = []
    this.push = (element) => items.push(element)
    this.pop = () => { return items.pop() }
    this.peek = () => { return items[items.length - 1] }
    this.isEmpty = () => { return items.length == 0 }
    this.size = () => { return items.length }
    this.clear = () => items = []
    this.print = () => console.log(items.toString)
}

const trap1=(height)=>{
    let stack = new Stack()
    let i= 0
    let res = 0
    let length = height.length
    while(i < length){
        if(stack.isEmpty() || height[i] <= height[stack.peek()]){
            stack.push(i++)
        }else{
            let t = stack.pop()
            if(stack.isEmpty()) continue
            res += (Math.min(height[i], height[stack.peek()]) - height[t]) * (i - stack.peek() - 1)
        }
    }
    return res
}

{
    (function () {
        let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
        console.log(trap1(height))
    })()
}

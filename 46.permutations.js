/*
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (45.95%)
 * Total Accepted:    229.7K
 * Total Submissions: 486.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 
 * Given a collection of distinct numbers, return all possible permutations.
 * 
 * 
 * 
 * For example,
 * [1,2,3] have the following permutations:
 * 
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    let res = []
    let length = nums.length
    const backtrack =(temp,visited)=>{
        if(visited.every(e=>e===1)){
            res.push(temp)
            return
        }
        //visited 
        for(let i=0;i<length;i++){
            if(visited[i]===1)continue
            let item = nums[i]

            visited[i]=1
            backtrack([...temp,item],visited)
            visited[i]=undefined
        }
    }
    backtrack([],Array(length).fill(0))
    return res
};
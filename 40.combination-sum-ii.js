/*
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (35.18%)
 * Total Accepted:    147.6K
 * Total Submissions: 411.8K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 
 * Given a collection of candidate numbers (C) and a target number (T), find
 * all unique combinations in C where the candidate numbers sums to T.
 * 
 * 
 * Each number in C may only be used once in the combination.
 * 
 * Note:
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * 
 * 
 * For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
 * A solution set is: 
 * 
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
    let result = []
    let visited = new Array(candidates.length).fill(false)
    candidates.sort()

    const bfs = (temp, left, pos) => {
        if (left < 0) return
        if (left === 0) {
            result.push(temp)
        }

        for (let i = pos; i < candidates.length; i++) {
            if (visited[i]) continue
            if (!visited[i - 1] && candidates[i] === candidates[i - 1]) continue

            visited[i] = true
            bfs([...temp, candidates[i]], left - candidates[i], i)
            visited[i] = false
        }
    }

    bfs([], target, 0)

    return result
}

const combinationSum2p =(candidates,target)=>{
    const l = candidates.length
    const res = []
    if(!l) return res
    const sub= []
    candidates.sort((a,b)=>a-b)
    const dfs = (i,rem)=>{
        if(rem===0){
            res.push(sub.slice())
        }
        for(let j=i;j<l;j++){
            if(rem<candidates[j])return
            if(j>i&&candidates[j]===candidates[j-1])continue
            sub.push(candidates[j])
            dfs(j+1,rem-candidates[j])
            sub.pop()
        }
    }

    dfs(0,target)
    return res
}

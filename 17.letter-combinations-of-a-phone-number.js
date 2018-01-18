/*
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (35.71%)
 * Total Accepted:    206K
 * Total Submissions: 575.2K
 * Testcase Example:  '""'
 *
 * Given a digit string, return all possible letter combinations that the
 * number could represent.
 * 
 * 
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below.
 * 
 * 
 * 
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 
 * Note:
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
const map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ])
  
  const letterCombinations = digits => {
    if (digits === '') return []
  
    let res = []
  
    const bfs = (temp, left) => {
      if (left.length === 0) {
        res.push(temp)
        return
      }
  
      let options = map.get(left[0])
  
      for (let i = 0; i < options.length; i++) {
        let item = options[i]
        bfs(temp + item, left.slice(1, left.length))
      }
    }
  
    bfs('', [...digits])
  
    return res
  }

  letterCombinations('23')
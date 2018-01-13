/*
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (24.56%)
 * Total Accepted:    414K
 * Total Submissions: 1.7M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * Examples:
 * 
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * 
 * Given "bbbbb", the answer is "b", with the length of 1.
 * 
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the
 * answer must be a substring, "pwke" is a subsequence and not a substring.
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s =>{
    let length = 0
    let cur =''
    for (const item of s) {
        let last = cur.indexOf(item)
        if(last){
            length = cur.length>length?cur.length:length
            cur = cur.substr(last+1)+item
        }
        else{
            cur += item
        }
    }
    return length = cur.length>length?cur.length:length    
};

const lengthOfLongestSubstring2 = s=> {
    let m = Array(256).fill(-1), res = 0, left = 0;
    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt();
        // no duplicates from left -- i
        if (m[index] == -1 || m[index] < left) {
            res = Math.max(res, i - left + 1);
        } else {
            // move left to next location of duplicates
            left = m[index] + 1;
        }
        m[index] = i;
    }
    return res;
};


const lengthOfLongestSubstring3 = s => {
    let p1 = 0
    let p2 = 0
    let max = 0
    const set = new Set()
  
    while (p2 < s.length) {
      if (!set.has(s[p2])) {
        set.add(s[p2])
        p2++
        max = Math.max(max, set.size)
      } else {
        set.delete(s[p1])
         p1++
      }
    }
    return max
  }
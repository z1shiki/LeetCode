/*
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (36.07%)
 * Total Accepted:    179.2K
 * Total Submissions: 491.9K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * 
 * 
 * Given an integer n, generate the nth term of the count-and-say sequence.
 * 
 * 
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * Example 1:
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: 4
 * Output: "1211"
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
    if(1==n) return '1'
    let s=[1]
    let sbuffer=[]
    for(let c=0;c<n-1;c++){
        let length=s.length
        let pre =s[0]
        let i =1
        for(let j=1;j<length;j++){
            let current = s[j]
            if(current==pre){
                i++
            }else{
                sbuffer.push(i)
                sbuffer.push(pre)
                i =1
            }
            pre = current
        }
        sbuffer.push(i)
        sbuffer.push(pre)
        s = sbuffer
        sbuffer=[]
    }
    return s.join('')
};
/*
 * [8] String to Integer (atoi)
 *
 * https://leetcode.com/problems/string-to-integer-atoi/description/
 *
 * algorithms
 * Medium (13.93%)
 * Total Accepted:    206.9K
 * Total Submissions: 1.5M
 * Testcase Example:  '""'
 *
 * Implement atoi to convert a string to an integer.
 * 
 * Hint: Carefully consider all possible input cases. If you want a challenge,
 * please do not see below and ask yourself what are the possible input
 * cases.
 * 
 * 
 * Notes: 
 * It is intended for this problem to be specified vaguely (ie, no given input
 * specs). You are responsible to gather all the input requirements up
 * front. 
 * 
 * 
 * Update (2015-02-10):
 * The signature of the C++ function had been updated. If you still see your
 * function signature accepts a const char * argument, please click the reload
 * button  to reset your code definition.
 * 
 * 
 * spoilers alert... click to show requirements for atoi.
 * 
 * Requirements for atoi:
 * 
 * The function first discards as many whitespace characters as necessary until
 * the first non-whitespace character is found. Then, starting from this
 * character, takes an optional initial plus or minus sign followed by as many
 * numerical digits as possible, and interprets them as a numerical value.
 * 
 * The string can contain additional characters after those that form the
 * integral number, which are ignored and have no effect on the behavior of
 * this function.
 * 
 * If the first sequence of non-whitespace characters in str is not a valid
 * integral number, or if no such sequence exists because either str is empty
 * or it contains only whitespace characters, no conversion is performed.
 * 
 * If no valid conversion could be performed, a zero value is returned. If the
 * correct value is out of the range of representable values, INT_MAX
 * (2147483647) or INT_MIN (-2147483648) is returned.
 * 
 * 
 */
/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = (str) => {
    str=str.trim()
    let strlength=str.length
    if(strlength==0) return 0
    let flag = true
    let i =0
    if(str.charAt(0)=='+'){
        i++
    }else if (str.charAt(0)=='-'){
        flag = false
        i++
    }
    let result = ''
    for(;i<strlength;i++){
        let item = str[i]
        if('0'>item||'9'<item)break
        result +=item
    }
    if(result.length==0)return 0
    if(flag&&result>2147483647)return 2147483647
    else if(!flag){
        result = -result
        if(result< -2147483648)return -2147483648
    }
    return parseInt(result)
};

const myAtoi1 =(str)=> {
    let ret = parseInt(str, 10);
    if(Number.isNaN(ret)) {
        return 0;
    }
    if(ret > 2147483647) {
        return 2147483647;
    } else if(ret < -2147483648) {
        return -2147483648;
    } else {
        return ret;
    }
};
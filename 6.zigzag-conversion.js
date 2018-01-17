/*
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (27.09%)
 * Total Accepted:    189K
 * Total Submissions: 697K
 * Testcase Example:  '""\n1'
 *
 * 
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * 
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 * 
 * string convert(string text, int nRows);
 * 
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 * 
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    const units = numRows + Math.max(0,numRows-2)
    const length=s.length
    const completeUnits = Math.floor(length/units)
    const last = length%units
    numRows -=1

    let result = ""
    const firstRowLength = completeUnits +(last>0?1:0)

    for(let i=0;i<firstRowLength;i++){
        result += s[i*units]
    }
    for(let row = 1;row<numRows;row++){
        let charsInRow = completeUnits *2
        if(last >row){
            charsInRow ++
        }
        if(last >=2*numRows-row+1){
            charsInRow ++
        }
        let unitPassed = -1
        for(let i=0;i<charsInRow;i++){
            if(i%2===0){
                unitPassed ++
                result +=s[unitPassed*units+row]
            }else{
                result +=s[(unitPassed+1)*units -row]
            }
        }
    }
    const left = length-result.length
    for(let i=0 ;i<left;i++){
        result += s[i*units+numRows]
    }
    return result
};
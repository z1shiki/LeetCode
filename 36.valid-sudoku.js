/*
 * [36] Valid Sudoku
 *
 * https://leetcode.com/problems/valid-sudoku/description/
 *
 * algorithms
 * Medium (36.86%)
 * Total Accepted:    145.9K
 * Total Submissions: 391.5K
 * Testcase Example:  '[[".","8","7","6","5","4","3","2","1"],["2",".",".",".",".",".",".",".","."],["3",".",".",".",".",".",".",".","."],["4",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".",".","."],["6",".",".",".",".",".",".",".","."],["7",".",".",".",".",".",".",".","."],["8",".",".",".",".",".",".",".","."],["9",".",".",".",".",".",".",".","."]]'
 *
 * Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
 * 
 * The Sudoku board could be partially filled, where empty cells are filled
 * with the character '.'.
 * 
 * 
 * 
 * A partially filled sudoku which is valid.
 * 
 * 
 * Note:
 * A valid Sudoku board (partially filled) is not necessarily solvable. Only
 * the filled cells need to be validated.
 * 
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
    let gridTable = constructGrid(parseData(board))
    let colTable = constructCol(parseData(board))
    let normalTable = parseData(board)

    return validate(gridTable) && validate(colTable) && validate(normalTable)
}

const parseData = rawData => rawData.map(row => [...row])

const createTable = num => Array(num).fill('').map(e => Array(num).fill(''))

const constructCol = parsedData => {
    let col = createTable(9)
    for (let _row in parsedData) {
        for (let _col in parsedData[_row]) {
            col[_col][_row] = parsedData[_row][_col]
        }
    }
    return col
}

const constructGrid = parsedData => {
    let grid = [...Array(9)].map(() => [])
    for (let _row in parsedData) {
        for (let _col in parsedData[_row]) {
            let _gridCol = Math.floor(_row / 3)
            let _gridRow = Math.floor(_col / 3)
            let _gridInd = _gridCol * 3 + _gridRow
            grid[_gridInd].push(parsedData[_row][_col])
        }
    }
    return grid
}

const validate = table => {
    for (let arr of table) {
        for (let e of arr) {
            if (!isNaN(e) && (arr.indexOf(e) !== arr.lastIndexOf(e))) return false
        }
    }
    return true
};
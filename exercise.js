function solve(board) {
    let xOptions = [0, 1,  1, 1];
    let yOptions = [1, 0, -1, 1];
    let numRows = board.length;
    let numCols = board[0].length;
    var max = {
        value: "", 
        reps: 0
    };
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            var value = board[i][j];
            for (let k = 0; k < 4; k++)
            {
                let reps = validate(board, value, i, xOptions[k], j, yOptions[k], 1);
                if (reps > max.reps)
                {
                    max.value = value;
                    max.reps = reps;
                }
            }
        }
    }
    var result = Array(max.reps).fill(max.value).join(', ');
    console.log(result); 
}

function validate(board, value, row, addToRow, col, addToCol, rep)
{
    if (row + addToRow >= 0 && row + addToRow < board.length && col + addToCol >= 0 && col + addToCol < board[0].length)
    {
        if (board[row + addToRow][col + addToCol] == value)
        {
            return validate(board, value, row + addToRow, addToRow, col + addToCol, addToCol, rep + 1);
        }
    }
    return rep;
}

const fs = require('fs');
 
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
    let array = [];
    let info = data.toString().split("\r\n");
    for (let i = 0; i < info.length; i++) {
        array[i] = info[i].split(", ");
    }
    solve(array);
});

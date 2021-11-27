function connectFour(board) {
    function winnerIs(player) {
        let column = board[0].length;
        let row = board.length;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                if ([0, 1, 2, 3].every(function (k) {
                    return board[i][j + k] == player;  // checks rows
                }) || [0, 1, 2, 3].every(function (k) {
                    return board[i + k] && board[i + k][j] == player; //checks columns
                }) || [0, 1, 2, 3].every(function (k) {
                    return board[i + k] && board[i + k][j + k] == player; //diagonal
                }) || [0, 1, 2, 3].every(function (k) {
                    return board[i + k] && board[i + k][j - k] == player; //backwards diagonal
                })) return true;
            }
        }
        return false;
    }

    if (winnerIs('R')) return 'R';
    console.log('iswinner', winnerIs('R'))
    if (winnerIs('Y')) return 'Y';
    if (winnerIs('R') == false && winnerIs('Y') == false && board.join('').indexOf('-') != -1) {
        return 'in progress'
    } else {
        return 'draw'
    }

}

console.log(connectFour([['-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', 'R', 'R', 'R'],
['-', '-', '-', 'Y', 'Y', 'R', 'Y'],
['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
['-', '-', 'Y', 'Y', 'R', 'R', 'R']]))

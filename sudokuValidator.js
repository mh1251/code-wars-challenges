let sudokuBoard =
    [[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]

function validSolution(board) {

    let correctPattern = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let correctPatternSum = correctPattern.reduce((sum, x) => sum + x);

    // validate rows [1, 2, 3, 4, 5, 6, 7, 8, 9] pattern
    let areRowsValid = validateRows(board, correctPattern);
    if (!areRowsValid) {
        return false;
    }

    // swap columns with rows
    swapRowsWithColumns(board);
    // recheck columns as rows
    let areColumnsValid = validateRows(board, correctPattern);
    if (!areColumnsValid) {
        return false;
    }

    // check if 3x3 blocks have [1, 2, 3, 4, 5, 6, 7, 8, 9] pattern
    let allBlocksAreValid = checkBlockValidity(board, correctPattern, correctPatternSum);

    if (allBlocksAreValid) {
        return true;
    } else {
        return false;
    }
}

//main function end//


function checkBlockValidity(board, correctPattern, correctPatternSum) {
    // Iterate over every 3x3 block
    let blockRowCounter = 1;
    let blockColumnCounter = 1;
    for (var i = 1; i <= 9; i++) {
        let blockSummation = 0;
        for (let j = blockRowCounter - 1; j < blockRowCounter + 2; j++) {
            for (let z = blockColumnCounter - 1; z < blockColumnCounter + 2; z++) {
                blockSummation += board[z][j];
            }
        }

        if (blockSummation != correctPatternSum) {
            return false;
        }

        blockSummation = 0;
        blockColumnCounter += 3;
        if (blockColumnCounter > 7) {
            blockColumnCounter = 1;
            blockRowCounter += 3;
        }
    }

    return true;
}

function validateRows(board, correctPattern) {
    for (let i = 0; i < board.length; i++) {
        let boardRow = [...board[i]];
        if (boardRow.sort((a, b) => a - b).join() === correctPattern.join()) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

function swapRowsWithColumns(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = board[i][j];
            board[i][j] = board[j][i];
            board[j][i] = tmp;
        }
    }
}

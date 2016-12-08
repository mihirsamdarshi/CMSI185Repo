/*
 * An event-based tic-tac-toe game.
 *
 * This script starts with the variables and functions (state
 * and behavior) that are needed by the game.  The last statement
 * sets an onload event handler, which in turn sets up the event
 * handlers for the tic-tac-toe board.  The HTML source is
 * expected to set the board up for us.
 */
var squares = [],
    EMPTY = '\xA0',
    score,
    moves,
    turn = 'X',

    /*
     * To determine a win condition, each square is "tagged"
     * from left to right, top to bottom, with successive
     * powers of 2.  Each cell thus represents an individual
     * bit in a 9-bit string, and a player's squares at any
     * given time can be represented as a unique 9-bit value.
     * A winner can thus be easily determined by checking
     * whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.
     *
     *   33825                      4680
     *        \                    /
     *          1 |   2 |   4 |  8   = 15
     *       -----+-----+-----+-----
     *         16 |  32 |  64 | 128  = 240
     *       -----+-----+-----+-----
     *        256 | 512 | 1024| 2048 = 3840
     *       -----+-----+-----+-----
     *       4096 | 8192|16384|32768 = 61440
     *       =======================
     *       4369   8738 17476 34952
     *
     */
    wins = [15, 240, 3840, 61440, 4369, 8738, 17476, 34952, 33825, 4680],

    startNewGame = function () {
        var i;

        turn = 'X';
        score = {'X': 0, 'O': 0};
        moves = 0;
        for (i = 0; i < squares.length; i += 1) {
            squares[i].firstChild.nodeValue = EMPTY;
        }
    },

    win = function (score) {
        var i;

        for (i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    },

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cat's game.  Also changes the
     * current player.
     */
    set = function () {
        if (this.firstChild.nodeValue !== EMPTY) {
            return;
        }
        this.firstChild.nodeValue = turn;
        moves += 1;
        score[turn] += this.indicator;
        if (win(score[turn])) {
            alert(turn + " wins!");
            startNewGame();
        } else if (moves === 16) {
            alert("Cat\u2019s game!");
            startNewGame();
        } else {
            turn = turn === 'X' ? 'O' : 'X';
        }
    };

window.onload = function () {
    // Note how we *really* rely on IDs being assigned properly.
    var indicator = 1,
        i,
        j,
        cell;

    for (i = 0; i < 4; i += 1) {
        for (j = 0; j < 4; j += 1) {
            cell = document.getElementById("cell" + i + j);
            cell.indicator = indicator;
            cell.onclick = set;
            cell.appendChild(document.createTextNode(''));
            squares.push(cell);
            indicator += indicator;
        }
    }
    startNewGame();
};

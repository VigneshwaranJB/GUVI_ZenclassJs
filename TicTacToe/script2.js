'use strict';
var g = new Game();
var counter = 0;
function play() {
    var bd = document.getElementById('board');
    bd.addEventListener('click', function (event) {
        // console.log(event.target);
        event.target.innerHTML = g.players[counter].symbol;
        var squareNum = event.target.id.split('');
        var row = squareNum[0];
        var col = squareNum[1];
        g.board.grid[row][col].whoseTurn();
        g.board.check_win();
        if (counter == 0) {
            counter = 1;
        }
        else {
            counter = 0;
        }
    });
}
function print_winner() {
    var winner = g.players[counter].symbol;
    console.log(winner + " wins");
}
function print_tie() {
    console.log("It's a tie");
}
function play_again() {
    var bt = document.getElementById('new-game');
    bt.addEventListener('click', function () {
        for (var i = 0; i < 9; i++) {
            document.querySelectorAll('.square')[i].innerHTML = "";
        }
        g = new Game();
    });
}
play();
play_again();

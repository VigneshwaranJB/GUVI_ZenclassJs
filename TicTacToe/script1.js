'use strict';
var Board = /** @class */ (function () {
    function Board(grid) {
        this.grid = [
            [new Square(), new Square(), new Square()],
            [new Square(), new Square(), new Square()],
            [new Square(), new Square(), new Square()]
        ];
    }
    Board.prototype.isFull = function () {
        var count = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.grid[i][j].state != "") {
                    count++;
                }
            }
        }
        if (count == 9) {
            return true;
        }
        else {
            return false;
        }
    };
    Board.prototype.check_win = function () {
        for (var i = 0; i < 3; i++) {
            if (this.grid[i][0].state == this.grid[i][1].state && this.grid[i][0].state == this.grid[i][2].state && this.grid[i][0].state != "") {
                print_winner();
            }
        }
        for (var j = 0; j < 3; j++) {
            if (this.grid[0][j].state == this.grid[1][j].state && this.grid[0][j].state == this.grid[2][j].state && this.grid[0][j].state != "") {
                print_winner();
            }
        }
        if ((this.grid[0][0].state == this.grid[1][1].state && this.grid[0][0].state == this.grid[2][2].state && this.grid[0][0].state != "") ||
            (this.grid[0][2].state == this.grid[1][1].state && this.grid[0][2].state == this.grid[2][0].state && this.grid[0][2].state != "")) {
            print_winner();
        }
        if (this.isFull()) {
            print_tie();
        }
    };
    return Board;
}());
var Square = /** @class */ (function () {
    function Square(state) {
        this.state = "";
    }
    Square.prototype.whoseTurn = function () {
        if (counter == 0) {
            return this.state = "x";
        }
        else {
            return this.state = "o";
        }
    };
    return Square;
}());
var Player = /** @class */ (function () {
    function Player(symbol) {
        this.symbol = symbol;
    }
    return Player;
}());
var Game = /** @class */ (function () {
    function Game() {
        this.board = new Board();
        this.players = [
            new Player("x"),
            new Player("o")
        ];
    }
    return Game;
}());

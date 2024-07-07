const { Chess } = require("chess.js");

module.exports = class Game {
  constructor(player1, player2) {
    this.whitePlayer = player1;
    this.blackPlayer = player2;
    this.board = new Chess();
    this.moves = [];
    this.startTime = new Date();
  }

  movePieces(io, move) {
    this.board.move(move);
    io.emit("boardState", this.board.fen());
  }
};

const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const Game = require("./Game");
const app = express();
const PORT = 5000;
const server = http.createServer(app);

const Games = [];
let pendingUser;

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`user connected, ${socket.id}`);
  socket.on("startGame", () => {
    if (pendingUser) {
      const game = new Game(pendingUser, socket.id);
      Games.push(game);
      socket.emit("playerRole", `You are black with id ${socket.id}`);
      io.emit("playerFound", "found");
      pendingUser = null;
      if (game) console.log("game created");
    } else {
      pendingUser = socket.id;
      socket.emit("searching", "Searching Opp...");
      socket.emit("playerRole", `You are white with id ${socket.id}`);
    }
  });

  socket.on("move", (move) => {
    console.log(move);

    const onGoingGame = Games.find(
      (game) => game.whitePlayer === socket.id || game.blackPlayer === socket.id
    );

    console.log(onGoingGame.board.fen());
    console.log(socket.id, onGoingGame.whitePlayer);

    if (
      onGoingGame.board.turn() === "w" &&
      socket.id !== onGoingGame.whitePlayer
    )
      return;

    if (
      onGoingGame.board.turn() === "b" &&
      socket.id !== onGoingGame.blackPlayer
    )
      return;
    else {
      io.emit("moved", move);
      onGoingGame.moves.push(move);
      io.emit("moveArray", onGoingGame.moves);
      onGoingGame.movePieces(io, move);
    }
    if (onGoingGame.board.in_check()) socket.broadcast.emit("check", "check");
    if (onGoingGame.board.game_over()) {
    }
  });
});

server.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`);
});

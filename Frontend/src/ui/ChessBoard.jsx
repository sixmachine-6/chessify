import { Chessboard } from "react-chessboard";
import { useCustomPeice } from "./customPiece";

function ChessBoard({ socket, game, position, role }) {
  const { customPieces } = useCustomPeice();

  function onDrop(sourceSquare, targetSquare) {
    const move = {
      from: sourceSquare,
      to: targetSquare,
    };
    if (move) {
      console.log("emitted");
      socket.emit("move", move);
      game.move(move);
    }
    if (move === null) {
      console.log("aman");
      return false;
    }
    return true;
  }
  return (
    <>
      <Chessboard
        id="BasicBoard"
        customLightSquareStyle={{ backgroundColor: "#ececcd" }}
        customDarkSquareStyle={{ backgroundColor: "#689647" }}
        customBoardStyle={{ borderRadius: "6px" }}
        // arePiecesDraggable={role === "black" ? true : false}
        customPieces={customPieces}
        position={position}
        onPieceDrop={onDrop}
        boardOrientation={role}
      />
    </>
  );
}

export default ChessBoard;

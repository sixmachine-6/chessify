import Player from "../ui/Player";
import NavBar from "./../ui/NavBar";
import ChessBoard from "../ui/ChessBoard";
import CheckGame from "../ui/CheckGame";
import { useEffect, useReducer, useState } from "react";
import Searching from "../ui/Searching";
import { useSocket } from "../hooks/useSocket";
import { Chess } from "chess.js";
import Button from "../ui/Button";
import toast from "react-hot-toast";
import Moves from "../ui/Moves";

const initialState = {
  status: "yetToStart",
  movesArray: [],
  role: "",
};

const reducer = function (state, action) {
  switch (action.type) {
    case "role":
      return { ...state, role: action.payload };
    case "search":
      return { ...state, status: action.payload };
    case "storeMoves":
      return { ...state, movesArray: [...action.payload] };
    case "gameStarted":
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
export default function PlayOnline() {
  const [game, setGame] = useState(new Chess());
  const [position, setPosition] = useState(game.fen());
  const [{ role, status, movesArray }, dispatch] = useReducer(
    reducer,
    initialState
  );
  console.log(status);

  const socket = useSocket();
  // console.log(position);
  // console.log(role);

  function handlePlayOnline() {
    socket.emit("startGame", () => {
      setGame(new Chess());
    });
  }
  useEffect(() => {
    if (!socket) return;
    socket.on("playerRole", (data) => {
      const playerRole = data.split(" ")[2];
      dispatch({ type: "role", payload: playerRole });
      toast.success(`You are ${playerRole}`);
    });

    socket.on("playerFound", (data) => {
      toast.success(data);
      dispatch({ type: "gameStarted", payload: data });
    });

    socket.on("searching", (data) => {
      toast(data);
      dispatch({ type: "search", payload: "searching" });
    });

    socket.on("moveArray", (data) => {
      dispatch({ type: "storeMoves", payload: data });
    });

    socket.on("check", (data) => {
      toast(data);
    });

    socket.on("boardState", (data) => {
      setPosition(data);
    });
  }, [socket]);
  return (
    <>
      <NavBar />

      <div className="">
        <div className="max-w-[47rem] px-4 min-[960px]:mx-0 mx-auto min-[960px]">
          <Player avatar="avataaars" name="opponent" />
          <ChessBoard
            socket={socket}
            game={game}
            setPosition={setPosition}
            position={position}
            role={role}
          />
          <Player avatar="big-smile" name="me" />
        </div>

        {status === "yetToStart" && (
          <div className="my-4 button-background flex flex-col rounded-lg space-y-5 justify-center py-5 px-8 mx-6">
            <Button onClick={handlePlayOnline} type="primary" value="3">
              Play
            </Button>
            <Button type="secondary" value="3">
              Play a Friend
            </Button>
          </div>
        )}
        {status === "searching" && <Searching />}
      </div>

      {status === "found" && <Moves moves={movesArray} />}
    </>
  );
}

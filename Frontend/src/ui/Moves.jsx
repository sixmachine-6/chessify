import MoveList from "./MoveList";

function Moves({ moves }) {
  console.log(moves);
  return (
    <ul className="flex  flex-wrap  button-background w-full px-4">
      {moves.map((move, index) => (
        <MoveList move={move} index={index} key={index} />
      ))}
    </ul>
  );
}

export default Moves;

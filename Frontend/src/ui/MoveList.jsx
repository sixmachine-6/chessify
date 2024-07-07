function MoveList({ move, index }) {
  return (
    <li className="flex justify-evenly w-1/2  rounded-lg secondary text-white text-3xl py-2">
      {index % 2 === 0 && <h3>{index}</h3>}
      <h3>{move.to}</h3>
    </li>
  );
}

export default MoveList;

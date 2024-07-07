import { LuTimer } from "react-icons/lu";

function Searching() {
  return (
    <div className="flex flex-col justify-center items-center button-background mx-4 rounded-lg">
      <div className="flex justify-between items-center py-4 mx-4 text-slate-200 w-full border-b border-slate-400">
        <h2 className="text-2xl font-bold mx-4">Searching...</h2>
        <h3 className="text-2xl font-bold mx-4">New Game</h3>
      </div>

      <div className="text-center py-6 spce-y-6 color">
        <LuTimer className="text-[100px] timer" />
        <p className="text-3xl text-slate-200 font-extrabold my-4">
          searching....
        </p>
      </div>
    </div>
  );
}

export default Searching;

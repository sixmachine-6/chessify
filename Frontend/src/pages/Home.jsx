import Button from "../ui/Button";
import NavBar from "../ui/NavBar";
import Image from "./../ui/Image";
import online from "/online.svg";
import computer from "/computer.svg";

function Home() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center lg:py-10 lg:gap-8 lg:my-10">
        <Image src="chessBoard.png" alt="chessBoard" />

        <div className="flex flex-col justify-center items-center  px-3 py-3 sm:py-9 md:py-12 md:my-5">
          <div className="font-extrabold  text-white tracking-wide">
            <p className="text-6xl max-w-[70rem] md:max-w-[40rem] text-center my-4 px-4 space-y-4">
              <span>Play Chess </span>
              <span>Online</span> <span>on the #1 Site!</span>
            </p>
          </div>
          <div className="flex  px-4 justify-center items-center flex-wrap my-4 text-2xl py-3">
            <p className="font-semibold px-10 py-2 text-center color ">
              <span className="font-bold  text-white">130 </span> Games Today
            </p>
            <p className="font-semibold px-10 py-2 text-center color">
              <span className="font-bold  text-white">10 </span> Playing Now
            </p>
          </div>

          <Button
            type="primary"
            image={online}
            text="Play with someone at your level"
            to="chessify/play-online"
          >
            Play Online
          </Button>
          <Button
            type="secondary"
            image={computer}
            text="Play vs customizable training bots"
            to="chessify/play-computer"
          >
            Play Computer
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;

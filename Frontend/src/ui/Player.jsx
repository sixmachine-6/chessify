import Image from "./Image";

function Player({ name, avatar }) {
  return (
    <>
      <div className="flex justify-between items-center player my-2 py-2  px-2 rounded-lg">
        <div className="flex justify-center items-center">
          <Image
            src={`https://api.dicebear.com/8.x/${avatar}/svg`}
            alt="avatar"
            type="avatar"
          />
          <h2 className="text-2xl text-white font-semibold">{name}</h2>
        </div>
        <h2 className="color text-5xl font-bold mr-3">10:00</h2>
      </div>
    </>
  );
}

export default Player;

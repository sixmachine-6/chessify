import { useNavigate } from "react-router-dom";

function Button({ children, type, image, text, to, value = 2, onClick }) {
  const navigate = useNavigate();
  if (image)
    return (
      <button
        onClick={() => navigate(`/${to}`)}
        className={`${type} py-7 my-5 mb-6 px-8 max-w-[37rem] sm:px-8 sm:rounded-2xl w-full flex gap-6  items-center  rounded-xl`}
      >
        <div>
          <img className="h-[6rem] mr-5" src={image} alt="online" />
        </div>
        <div className="space-y-2">
          <h2 className="font-extrabold  text-left text-4xl text-white">
            {children}
          </h2>
          <p className="text-xl text-white font-semibold">{text}</p>
        </div>
      </button>
    );
  return (
    <button
      onClick={onClick}
      className={` ${type} px-3 py-3 text-${Number(
        value
      )}xl mx-1 text-white  rounded-md`}
    >
      {children}
    </button>
  );
}

export default Button;

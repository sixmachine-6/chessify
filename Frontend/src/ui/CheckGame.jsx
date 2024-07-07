import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { RiSkipLeftLine } from "react-icons/ri";
import { RiSkipRightLine } from "react-icons/ri";
import { TbReload } from "react-icons/tb";
import CheckButton from "./CheckButton";

function CheckGame() {
  return (
    <div className="flex fixed bottom-0 px-4 w-full py-4 justify-center max-w-[50rem]  mx-auto items-center button-background">
      <CheckButton type="secondary">
        <RiSkipLeftLine />
      </CheckButton>

      <CheckButton type="secondary">
        <FaAngleLeft />
      </CheckButton>

      <CheckButton type="secondary">
        <FaAngleRight />
      </CheckButton>

      <CheckButton type="secondary">
        <RiSkipRightLine />
      </CheckButton>

      <CheckButton type="secondary">
        <TbReload />
      </CheckButton>
    </div>
  );
}

export default CheckGame;

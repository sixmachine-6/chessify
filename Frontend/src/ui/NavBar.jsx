import Button from "./Button";
import { IoMdMenu } from "react-icons/io";
function NavBar() {
  return (
    <nav className="flex justify-between items-center px-2 my-2 py-3 lg:hidden">
      <div className="flex items-center ">
        <span>
          <IoMdMenu className="color text-6xl mr-3" />
        </span>
        <h2 className="font-bold text-white text-3xl">Chessify</h2>
      </div>

      <div>
        <Button type="secondary">Sign Up</Button>
        <Button type="primary">Log In</Button>
      </div>
    </nav>
  );
}

export default NavBar;

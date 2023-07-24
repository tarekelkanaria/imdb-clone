import TopMenuItem from "./TopMenuItem";
import { AiTwotoneHome } from "react-icons/ai";
import { BsInfoSquareFill } from "react-icons/bs";
import ModeSwitch from "./ModeSwitch";

const TopMenu = () => {
  return (
    <nav className="container flex justify-between items-center py-6">
      <ul className="flex">
        <TopMenuItem title="HOME" path="/" Icon={AiTwotoneHome} />
        <TopMenuItem title="ABOUT" path="/about" Icon={BsInfoSquareFill} />
      </ul>
      <ul className="mx-4 flex items-center space-x-5">
        <ModeSwitch />
        <li>
          <h1>
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">clone</span>
          </h1>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;

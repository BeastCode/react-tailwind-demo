import { useState } from "react";
import NikeLogo from "../assets/nike.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contacts"];
export function Nav() {
  const [isMobileMenuShown, setIsMoblieMenuShown] = useState(false);
  return (
    <div className="flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Menu Button */}
      <button
        onClick={() => setIsMoblieMenuShown(!isMobileMenuShown)}
        className="lg:hidden p-2 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg"
      >
        <RxHamburgerMenu size={24}></RxHamburgerMenu>
      </button>

      {/* Menu */}
      <div
        className={`${!isMobileMenuShown && "hidden"} lg:block w-full lg:w-auto`}
      >
        <ul className="flex flex-col lg:space-x-8 lg:flex-row bg-gray-50 lg:bg-transparent border-gray-100 lg:border-none rounded-lg p-4 text-lg">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded py-3 px-2 font-bold 
                ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-200"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-center h-12 w-12 shadow-md bg-white rounded-full">
          <TbShoppingBag />
        </div>
      </div>
    </div>
  );
}

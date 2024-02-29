import NikeLogo from "../assets/nike.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contacts"];
export function Nav() {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button className="p-2 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg">
        <RxHamburgerMenu size={24}></RxHamburgerMenu>
      </button>
      <div className="w-full">
        <ul className="bg-gray-50 border-gray-100 rounded-lg p-4 text-lg">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded py-3 px-2 font-bold 
                ${i === 0 ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import { SearchIcon, HomeIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { ChatIcon, BellIcon, UserCircleIcon } from "@heroicons/react/outline";

import NavIcon from "./NavIcon";
function Navbar() {
  return (
    <header className="grid grid-cols-1 sm:flex items-center px-3 shadow  justify-between">
      <div className=" flex items-center justify-between space-x-4 md:space-x-2">
        <span className="px-3 py-1 bg-green-500 inline-block font-black text-gray-100 text-2xl rounded-md">
          w
        </span>
        <form className="flex items-center bg-green-50  p-2 rounded-md  ">
          <SearchIcon className="text-green-500 w-6 h-6 cursor-pointer" />
          <input
            type="text"
            placeholder="search naijawave"
            className=" focus-within:outline-none bg-transparent px-2 hidden md:block"
          />
        </form>
      </div>
      <div className="flex sm:contents">
        <div className="  flex items-center  justify-between    flex-grow sm:justify-center space-x-2 ">
          <NavIcon Icon={HomeIcon} link="/" active />
          <NavIcon Icon={ChatIcon} link="/" />
          <NavIcon Icon={BellIcon} link="/" />
          <NavIcon Icon={UserCircleIcon} link="/" />
        </div>

        <div className="flex  space-x-1  lg:space-x-5 text-sm md:space-x-2  justify-between  items-center ">
          <h5 className="text-sm lg:text-base font-bold ">
            Wave,
            <span className="text-sm  lg:text-base font-black  sm:inline-block">
              ADEBOLA
            </span>
          </h5>
          <ChevronDownIcon className="  w-6 h-6 sm:h-7 sm:w-7 md:w-8 md:h-8 lg:w-9 lg:h-9  bg-green-500 rounded-full" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

import React from "react";
import { SearchIcon, HomeIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { ChatIcon, BellIcon, UserCircleIcon } from "@heroicons/react/outline";

import NavIcon from "./NavIcon";
function Navbar() {
  return (
    <header className="sticky z-10 top-0 left-0 bg-green-50 sm:flex items-center px-2 sm:px-5 md:px-10 shadow  justify-between">
      <div className=" flex items-center justify-between space-x-10 md:space-x-5">
        <span className="px-3 py-1 bg-green-500 inline-block font-black text-gray-100 text-2xl rounded-md">
          w
        </span>
        <form className="flex items-center bg-green-100  p-2 rounded-md  ">
          <SearchIcon className="text-green-500 w-6 h-6 cursor-pointer" />
          <input
            type="text"
            placeholder="search naijawave"
            className=" focus-within:outline-none bg-transparent px-2 hidden lg:block"
          />
        </form>
      </div>
      <div className="flex sm:contents ">
        <div className="  flex items-center  justify-between     flex-grow sm:justify-center  ">
          <NavIcon Icon={HomeIcon} link="/" active />
          <NavIcon Icon={ChatIcon} link="/" />
          <NavIcon Icon={BellIcon} link="/" />
          <NavIcon Icon={UserCircleIcon} link="/" />
         
        </div>

        <div className="flex  space-x-1  lg:space-x-20 text-sm md:space-x-16  justify-between  items-center ">
          <h5 className="text-xs lg:text-base font-bold ">
            Wave,
            <span className="  font-black  inline-block">
              ADEBOLA
            </span>
          </h5>
          <ChevronDownIcon className="  h-7 w-7 md:w-8 md:h-8 lg:w-9 lg:h-9  bg-green-700 text-gray-200 rounded-full" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

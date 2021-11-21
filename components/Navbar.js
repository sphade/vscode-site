import React from "react";
import { SearchIcon, HomeIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { ChatIcon, BellIcon, UserCircleIcon } from "@heroicons/react/outline";
import Link from 'next/link'

import NavIcon from "./NavIcon";
function Navbar() {
  return (
    <header className="sticky z-10 top-0 left-0 bg-green-50 sm:flex items-center px-3 md:px-3 shadow  justify-between">
      <div className=" flex items-center justify-between space-x-10 md:space-x-5">
        <span className="px-3 py-1 bg-green-500 inline-block font-black text-gray-100 text-2xl rounded-md">
          w
        </span>
        <Link href='/SearchPage'>
        
        <a className="flex items-center bg-green-100  p-2 rounded-full md:rounded-lg ">
          <SearchIcon className="text-green-500 w-6 h-6 cursor-pointer" />
          <input
          type="text"
          placeholder="search naijawave"
          className=" focus-within:outline-none bg-transparent px-2 hidden lg:block"
          />
          </a>
          </Link>
      </div>
      <div className="flex sm:contents ">
        <div className="  flex items-center  justify-between overflow-auto    flex-grow sm:justify-center  ">
          <NavIcon Icon={HomeIcon} link="/" active name='home'/>
          <NavIcon Icon={ChatIcon} link="/chat" name='messaging' />
          <NavIcon Icon={BellIcon} link="/" name='notification' />
          <NavIcon Icon={UserCircleIcon} link="/" name='profile' />
        </div>

        <div className="flex  justify-between  items-center flex-shrink">
          <h5 className="text-xs lg:text-sm font-bold hidden md:block">
            Wave,
            <span className="  font-black  inline-block">ADEBOLA</span>
          </h5>
          <ChevronDownIcon className=" ml-2 md:ml-5 h-5 w-5 md:w-7 md:h-7 lg:w-8 lg:h-8  bg-green-700 text-gray-200 rounded-full" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

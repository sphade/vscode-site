import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { HomeIcon, SearchIcon } from "@heroicons/react/solid";
import Link from 'next/link'

function SearchLayout({ children }) {
  return (
    <div>
      <div className="sticky z-10 top-0 left-0 px-2 py-2 shadow bg-green-50 flex justify-between items-center">
        <ArrowLeftIcon
          className="h-7 w-10  hover:bg-green-100 mr-10 sm:mr-24"
          onClick={() => {
            history.back();
          }}
        />
        <form className="flex items-center bg-green-100 flex-grow p-2 rounded-full ring-1 ring-green-500">
          <SearchIcon className="text-green-500 w-6 h-6 cursor-pointer" />
          <input
            type="text"
            placeholder="search naijawave"
            className=" focus-within:outline-none bg-transparent px-2 w-full  lg:block"
          />
        </form>
        <Link href="/">
          <HomeIcon className="h-7 w-10  hover:bg-green-100 ml-10 sm:ml-24" />
        </Link>
      </div>
      <main className='bg-gray-100 font-sans'>{children}</main>
    </div>
  );
}

export default SearchLayout;

import React from "react";

import Link from "next/link";
function NavIcon({ Icon, link, active, name }) {
  return (
    <Link href={link}>
      <a
        className={`transition ease-in duration-200 py-2  flex items-center hover:bg-green-100   px-3 md:px-5 lg:px-7 
        
        }`}
      >
        <Icon
          className={`text-gray-600  w-5 h-5 sm:h-7 sm:w-7  ${
            active ? " text-green-800  " : ""
          }  `}
        />
        <p
          className={`text-xs sm:text-sm md:font-bold capitalize font-semibold text-gray-600  ${
            active ? " text-green-800  " : ""
          }`}
        >
          {name}
        </p>
      </a>
    </Link>
  );
}

export default NavIcon;

import React from "react";

import Link from "next/link";
function NavIcon({ Icon, link, active }) {
  return (
    <Link href={link}>
      <a
        className={`py-2 inline-block hover:bg-green-50   px-5 md:px-10${
          active ? " border-green-500 border-b-2 " : ""
        }`}
      >
              <Icon className={`text-gray-500  w-6 h-6 sm:h-7 sm:w-7 md:w-8 md:h-8 ${
                active ? " text-green-500  " : ""
              }  `} />
      </a>
    </Link>
  );
}

export default NavIcon;

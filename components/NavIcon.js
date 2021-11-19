import React from "react";

import Link from "next/link";
function NavIcon({ Icon, link, active }) {
  return (
    <Link href={link}>
      <a
        className={`py-2 inline-block md:hover:bg-green-100   px-3 md:px-5 lg:px-7 ${
          active ? " border-green-500 border-b-2 " : ""
        }`}
      >
        <Icon
          className={`text-gray-700  w-6 h-6 sm:h-7 sm:w-7 md:w-8 md:h-8 ${
            active ? " text-green-900  " : ""
          }  `}
        />
      </a>
    </Link>
  );
}

export default NavIcon;

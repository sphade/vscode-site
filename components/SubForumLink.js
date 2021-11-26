import React from "react";
import { HashtagIcon } from "@heroicons/react/solid";
import Link from "next/link";
function SubForumLink({ name, link, as }) {
  return (
    <Link href={link}>
      <a className="hover:bg-green-50 font-medium flex px-1 py-1 items-center cursor-pointer justify-center text-gray-700   w-20 sm:w-auto rounded-lg border border-gray-900 m-0.5">
        <HashtagIcon className="h-2 w-2" />
        {name}
      </a>
    </Link>
  );
}

export default SubForumLink;

import React, { useEffect } from "react";
import ActiveLink from "./ActiveLink";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import {
  CodeIcon,
  MinusIcon,
  MinusSmIcon,
  XIcon,
} from "@heroicons/react/solid";
import { themeChange } from "theme-change";
function Header() {
  useEffect(() => {
    themeChange(false);
  }, []);
  const router = useRouter();
  const path = () => {
    let page = null;
    if (router.pathname === "/") {
      page = "home";
    } else {
      page = router.pathname.slice(1);
    }
    return page;
  };
  const ListItem = ({ content, Icon, red }) => {
    return (
      <div
        className={`capitalize    ${red && " group hover:bg-red-500"}
          ${!red && "  hover:bg-gray-700"}
          text-gray-400  p-2 cursor-pointer`}
      >
        {Icon && (
          <div className={`h-6 w-6  group-hover:text-white`}>{Icon}</div>
        )}

        {content}
      </div>
    );
  };
  return (
    <div className=" bg-primary border-gray-700 border-b z-[999] inset-0 sticky flex items-center justify-between md:justify-between font-sans px-3">
      <div className="flex items-center justify-between   flex-1 ">
        <CodeIcon className="h-7 w-10 text-blue-600 " />

        <ListItem content="Github" />
        <ListItem content="LinkedIn" />
      </div>

      <h1 className="hidden md:block flex-1 text-gray-400 capitalize text-sm text-center">
        {path()}----LAWAL ADEBOLA FAWAZ
      </h1>

      <div className=" md:flex items-center  flex-1  justify-end ">
      
        <select data-choose-theme   className="  divide-y-2 bg-blue-600 text-white font-black shadow-md bg-opacity-100 rounded-lg w-40 px-2 py-1 border-0 outline-none" >
          <option value="" className="p-3">Default Theme</option>
          <option value="owl">owl</option>
          <option value="owl-light">owl-light</option>
        </select>
       
      </div>
    </div>
  );
}

export default Header;

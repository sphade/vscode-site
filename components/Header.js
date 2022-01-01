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
  const ListItem = ({ content, Icon, red, href }) => {
    return (
      <a
        className={`capitalize    ${red && " group hover:bg-red-500"}
          ${!red && "  hover:bg-gray-700"}
          text-gray-400  p-2 cursor-pointer`}
        href={href}
      >
        {Icon && (
          <div className={`h-6 w-6  group-hover:text-white`}>{Icon}</div>
        )}

        {content}
      </a>
    );
  };
  return (
    <div className=" bg-primary border-gray-700 border-b z-[999] inset-0 sticky flex items-center justify-around  font-sans px-3">
      <div className="flex items-center justify-between   flex-1 ">
        <CodeIcon className="h-7 w-10 text-blue-600 " />

        <ListItem content="Github" href="https://github.com/sphade" />
        <ListItem
          content="LinkedIn"
          href="https://www.linkedin.com/in/lawaladebola/"
        />
      </div>

      <h1 className="hidden md:block flex-1 text-gray-400 capitalize text-sm text-center">
        {path()}----LAWAL ADEBOLA FAWAZ
      </h1>

      <div className=" flex items-center  flex-1  justify-end ">
        <select
          data-choose-theme
          className="  bg-blue-600 text-white font-bold shadow-md bg-opacity-100 rounded-lg  px-2 py-1 border-0 outline-none"
        >
          <option value="" className="p-3">
            one dark pro
          </option>
          <option value="owl">owl</option>
          <option value="owl-light">owl-light</option>
        </select>
      </div>
    </div>
  );
}

export default Header;

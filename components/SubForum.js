import { useState } from "react";
import { AtSymbolIcon, HashtagIcon } from "@heroicons/react/solid";
import SubForumLink from "./SubForumLink";

function SubForum() {
  const [general, setGeneral] = useState([
    {
      name: "politics",
      link: "/politics",
    },
    {
      name: "Crime",
      link: "/crime",
    },
    {
      name: "Business",
      link: "/business",
    },
    {
      name: "crypto",
      link: "/crypto",
    },
    {
      name: "crypto",
      link: "/crypto",
    },
    {
      name: "Cars",
      link: "/cars",
    },
    {
      name: "sales",
      link: "/sales",
    },
    {
      name: "Art",
      link: "/art",
    },
    {
      name: "Animal/Pet",
      link: "/Animals",
    },
  ]);

  const [entertainment, setEntertainment] = useState([
    {
      name: "celebrities",
      link: "/celebrities",
    },
    {
      name: "music",
      link: "/music",
    },
    {
      name: "anime",
      link: "/anime",
    },
    {
      name: "tv-series",
      link: "/tv-series",
    },
    {
      name: "romance",
      link: "/romance",
    },
    {
      name: "Stories",
      link: "/stories",
    },
    
  ]);
  return (
    <>
      <div className='py-1'>
        <h2 className="font-black  sm:text-xl text-green-900">General</h2>
        <div className=" flex flex-row sm:flex-col flex-wrap ">
          {general.map(({ name, link }) => (
            <SubForumLink name={name} link={link} />
          ))}
        </div>
      </div>

      <div className='py-1'>
        <h2 className="font-black  sm:text-xl text-green-900 capitalize">
          entertainment
        </h2>
        <div className=" flex flex-row sm:flex-col flex-wrap ">
          {entertainment.map(({ name, link }) => (
            <SubForumLink name={name} link={link} />
          ))}
        </div>
      </div>

      <div className='py-1'>
        <h2 className="font-black  sm:text-xl text-green-900 capitalize">
          Tech
        </h2>
        <div className=" flex flex-row sm:flex-col flex-wrap ">
          {general.map(({ name, link }) => (
            <SubForumLink name={name} link={link} />
          ))}
        </div>
      </div>

      <div className='py-1'>
        <h2 className="font-black  sm:text-xl text-green-900 capitalize">
          jobs
        </h2>
        <div className=" flex flex-row sm:flex-col flex-wrap ">
          {general.map(({ name, link }) => (
            <SubForumLink name={name} link={link} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SubForum;

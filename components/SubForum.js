import { useState } from "react";
import { AtSymbolIcon, HashtagIcon } from "@heroicons/react/solid";
import SubForumLink from "./SubForumLink";

function SubForum() {
  const [general, setGeneral] = useState([
    {
      name: "politics",
      link: "/category/politics",
      as:'/category/polituics'
    },
    {
      name: "Crime",
      link: "/category/crime",
      as:'crime'

    },
    {
      name: "Business",
      link: "/category/business",
      as:'crime'

    },
    {
      name: "crypto",
      link: "/category/crypto",
      as:'crime'

    },
    {
      name: "crypto",
      link: "/category/crypto",
      as:'crime'

    },
    {
      name: "Cars",
      link: "/category/cars",
      as:'crime'

    },
    {
      name: "sales",
      link: "/category/sales",
      as:'crime'

    },
    {
      name: "Art",
      link: "/category/art",
      as:'crime'

    },
    {
      name: "Animal/Pet",
      link: "/category/Animals",
      as:'crime'

    },
  ]);

  const [entertainment, setEntertainment] = useState([
    {
      name: "celebrities",
      link: "/category/celebrities",
      as:'crime'

    },
    {
      name: "music",
      link: "/category/music",
      as:'crime'

    },
    {
      name: "anime",
      link: "/category/anime",
      as:'crime'

    },
    {
      name: "tv-series",
      link: "/category/tv-series",
      as:'crime'

    },
    {
      name: "romance",
      link: "/category/romance",
      as:'crime'

    },
    {
      name: "Stories",
      link: "/category/stories",
      as:'crime'

    },
    
  ]);
  return (
    <>
      <div className='py-1'>
        <h2 className="font-black  sm:text-xl text-green-900">General</h2>
        <div className=" flex flex-row sm:flex-col flex-wrap ">
          {general.map(({ name, link,as }) => (
            <SubForumLink name={name} link={link} as={ as}/>
          ))}
        </div>
      </div>

      <div className='py-1'>
        <h2 className="font-black  sm:text-xl text-green-900 capitalize">
          entertainment
        </h2>
        <div className=" flex flex-row sm:flex-col flex-wrap ">
          {entertainment.map(({ name, link,as }) => (
            <SubForumLink name={name} link={link} as={ as}/>
          ))}
        </div>
      </div>

      <div className='py-1'>
        <h2 className="font-black  sm:text-xl text-green-900 capitalize">
          Tech
        </h2>
        <div className=" flex flex-row sm:flex-col flex-wrap ">
          {general.map(({ name, link,as }) => (
            <SubForumLink name={name} link={link} as={ as}/>
          ))}
        </div>
      </div>

      <div className='py-1'>
        <h2 className="font-black  sm:text-xl text-green-900 capitalize">
          jobs
        </h2>
        <div className=" flex flex-row sm:flex-col flex-wrap ">
          {general.map(({ name, link,as }) => (
            <SubForumLink name={name} link={link} as={ as}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default SubForum;

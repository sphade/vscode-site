import {
  ChatAlt2Icon,
  CollectionIcon,
  EyeIcon,
  ThumbDownIcon,
  ThumbUpIcon,
  UploadIcon,
} from "@heroicons/react/solid";
import React from "react";
import Image from "next/image";

function Thread({ name, img, topic, views }) {
  return (
    <div className="w-full border   shadow-md  mx-auto  rounded  text-gray-900  bg-white py-1 z-10">
      <div className="flex  text-xs  items-center">
        <p className="px-1 mr-2 font-bold">{name}</p>{" "}
      </div>
      <div className="flex  justify-between  sm:gap-0 items-center ">
        <p className="font-semibold capitalize  w-72    ">{topic}</p>
        <div className=" border ">
          <Image
            src={img}
            width={200}
            height={128}
            alt="polerimg"
          
          />
        </div>
      </div>
      <p className="px-1 py-1">{views} views</p>
    </div>
  );
}

export default Thread;

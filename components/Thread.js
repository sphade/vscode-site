import { ChatAlt2Icon, CollectionIcon, EyeIcon, ThumbDownIcon, ThumbUpIcon, UploadIcon } from "@heroicons/react/solid";
import React from "react";
import Image from 'next/image'

function Thread() {
  return (
    <div className="w-full shadow-md mx-auto border rounded  text-gray-900 mb-1 bg-white px-5 ">
      <div className="flex  text-xs">
        <p className="px-1 mr-2">lawal</p>{" "}
        <p className="text-green-600">follow</p>
          </div>
          <div className="flex justify-between">
          
          <p className="truncate">
          Lorem ipsum dolor sit, amet consectetu adt. Non,
          </p>
          <Image src='/../public/poller.JPG' width={200} height={100} className='flex-grow'/>
          </div>
      <div className="flex space-x-10 text-gray-700">
        <div className="flex border rounded-full ">10 <ThumbUpIcon className='h-5'/></div>

        <div className="flex border rounded-full">10 <ChatAlt2Icon className='h-5'/></div>
        <div className="flex border rounded-full">10 <EyeIcon className='h-5'/></div>
      </div>
    </div>
  );
}

export default Thread;

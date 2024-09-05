import React from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import Image from "next/image";
import data from "@/utils/data";

export default function NewArrival() {
  return (
    <div className="min-h-[30vh] container mb-10 mx-auto mt-[10rem]">
      <h1 className="text-2xl text-black font-semibold capitalize">
       new arrival
      </h1>
      <div className="lg:flex lg:justify-between container mx-auto">
        <div className="mt-10 flex mx-auto justify-center lg:mt-0">
          <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center mx-auto">
            {data.newArrival.map((item, index) => (
              <div key={index} className="relative w-full max-w-xs group">
                <div className="shadow-md flex justify-center items-center bg-black/20 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="h-[20vh] w-full object-cover rounded-md"
                  />

                  {/* Icons */}
                  <div className="absolute inset-0 flex justify-center items-center space-x-4 text-rose-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button className="px-3 hover:bg-rose-400">
                            <FaRegEye size={20} className="" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">quickview</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button className="px-3 hover:bg-rose-400">
                            <IoCartOutline size={20} className="" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">add to cart</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button className="px-3 hover:bg-rose-400">
                            <IoIosHeartEmpty size={20} className="" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">wishlist</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-xl text-black font-semibold mt-4">
                    {item.name}
                  </h1>
                  <p className="text-sm text-gray-500 mt-2">
                    {item.description}
                  </p>
                  <p className="text-sm text-black font-semibold mt-2">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center  mt-10">
        <Button className=" text-white w-1/3 lg:w-1/5 hover:bg-red-500 transition duration-500 capitalize">
          view all
        </Button>
      </div>
    </div>
  );
}

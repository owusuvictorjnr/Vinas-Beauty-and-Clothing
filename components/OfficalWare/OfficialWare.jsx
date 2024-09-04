import data from "@/utils/data";
import Image from "next/image";
import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

function OfficialWare() {
  return (
    <div className="min-h-[50vh] mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {data.officiaWare.map((item, index) => (
          <Card
            key={index}
            className="flex flex-col pb-10 text-center justify-center bg-black bg-opacity-10 rounded-md"
          >
            <CardHeader className="flex justify-center items-center mt-[5rem]">
              <Image
                src={item.image}
                alt={item.name}
                height={500}
                width={1000}
                className="h-[30vh] flex justify-center w-1/2 object-cover hover:scale-105 transition duration-700 ease-in-out rounded-md"
              />
            </CardHeader>
            <div className="text-center p-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="mt-2">{item.description}</p>
            </div>
            <div className="">
              <Button className="capitalize transition hover:bg-rose-600 hover:duration-500">
                shop now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default OfficialWare;

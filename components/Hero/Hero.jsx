"use client";

import data from "@/utils/data";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "../ui/button";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Hero({ deviceType }) {
  return (
    <div className="h-screen bg-gray-200">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        rewind={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={800}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container h-full"
        className="w-full mx-auto z-10 h-full"
      >
        {data.carousel.map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-10 mx-auto md:flex-row items-center justify-center min-h-full w-full px-5"
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center mx-auto h-[50vh] lg:order-1">
              <Image
                src={item.image}
                alt={item.name}
                // layout="responsive"
                height={500}
                width={1000}
                className="object-cover mx-auto h-[50vh] w-full rounded-md"
              />
            </div>

            {/* Text Section */}
            <div className="w-full space-y-10 lg:w-1/2 h-full flex flex-col justify-center lg:p-12 text-center lg:text-left">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  {item.name}
                </h2>
                <p className="text-lg lg:text-2xl">{item.description}</p>
              </div>
              <div className="">
                <Button className="hover:bg-rose-400 hover:duration-150 capitalize">
                  shop now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
